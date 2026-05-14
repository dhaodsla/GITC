import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/inquiry", async (req, res) => {
    try {
      const { parentName, contact, grade, inquiry } = req.body;

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({ error: "환경 변수(Environment Variables)에서 이메일 전송을 위한 SMTP_USER(구글 이메일)와 SMTP_PASS(구글 앱 비밀번호)를 설정해야 합니다." });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const gradeText =
        grade === "elem-low"
          ? "초등학교 저학년 (1~3학년)"
          : grade === "elem-high"
          ? "초등학교 고학년 (4~6학년)"
          : grade === "middle"
          ? "중학생"
          : "선택 안 함";

      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO || "dhaodsla@gmail.com",
        subject: `[GITC 캠프 상담신청] ${parentName}님 상담 문의`,
        text: `보호자 성함: ${parentName}\n연락처: ${contact}\n자녀 학년: ${gradeText}\n\n문의 내용:\n${inquiry}`,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // For Express 4.x
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
