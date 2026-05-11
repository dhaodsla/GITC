import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, PlaneTakeoff, Info as InfoIcon, FileWarning } from 'lucide-react';

export default function InfoSection() {
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <InfoIcon className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">캠프 출국 및 상세 안내</h2>
        <p className="text-lg text-neutral-600">성공적인 캠프를 위해 꼭 필요한 필수 체크리스트와 안내 사항입니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 준비물 리스트 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <ClipboardList className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">필수 준비물 체크리스트</h3>
          </div>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              <span className="text-green-500 font-bold mt-0.5">✓</span> 
              <span><strong>필수 서류:</strong> 여권(만료일 6개월 이상 필수), 영문 주민등록등본, 왕복 항공권(e-ticket) 사본</span>
            </li>
            <li className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              <span className="text-green-500 font-bold mt-0.5">✓</span> 
              <span><strong>의류:</strong> 넉넉한 여름옷, 얇은 긴팔/가디건(강의실 에어컨 완비), 속옷, 양말, 운동화, 편한 슬리퍼</span>
            </li>
            <li className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              <span className="text-green-500 font-bold mt-0.5">✓</span> 
              <span><strong>세면/위생:</strong> 칫솔, 치약, 샤워타월, 스킨로션, 선크림, <span className="text-red-500 font-medium">개인 상비약(종합감기약, 장염약, 밴드 등)</span></span>
            </li>
            <li className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              <span className="text-green-500 font-bold mt-0.5">✓</span> 
              <span><strong>수영/기타:</strong> 수영복(래쉬가드 권장), 물안경, 개인 텀블러, 필기도구</span>
            </li>
            <li className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              <span className="text-green-500 font-bold mt-0.5">✓</span> 
              <span><strong>용돈:</strong> 약 $100~$150 (미화로 준비, 현지에서 페소로 안전하게 환전 진행)</span>
            </li>
          </ul>
        </motion.div>

        <div className="space-y-8">
          {/* 입소/퇴소 안내 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <PlaneTakeoff className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">입소 및 퇴소 절차</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-neutral-900 mb-1">입국 및 입소</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  출국 당일 인천/부산 지역 공항 집결지에 모입니다. 총괄 매니저 및 인솔 교사 미팅 후 단체 수속을 밟고 출국합니다. 세부 공항 도착 시 전용 버스로 곧바로 대학 캠퍼스로 이동하며, 부모님께 도착 문자를 발송해 드립니다.
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-orange-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-neutral-900 mb-1">수료 및 퇴소</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  캠프 마지막 날 감동적인 수료식을 마친 후, 교사들의 인솔 하에 세부 공항으로 이동하여 단체 귀국길에 오릅니다. 한국 공항 게이트에서 마중 나오신 부모님께 안전하게 인계하며 캠프가 종료됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 환불 규정 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <FileWarning className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">환불 규정</h3>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 bg-white p-4 rounded-xl border border-neutral-200">
              <li className="flex justify-between py-2 border-b border-dashed border-neutral-200">
                <span>캠프 시작 30일 전 취소</span>
                <strong className="text-neutral-900">등록비 제외 100% 환불</strong>
              </li>
              <li className="flex justify-between py-2 border-b border-dashed border-neutral-200">
                <span>캠프 시작 29일 ~ 15일 전 취소</span>
                <strong className="text-neutral-900">총 비용의 70% 환불</strong>
              </li>
              <li className="flex justify-between py-2 border-b border-dashed border-neutral-200">
                <span>캠프 시작 14일 ~ 7일 전 취소</span>
                <strong className="text-neutral-900">총 비용의 50% 환불</strong>
              </li>
              <li className="flex justify-between py-2">
                <span>캠프 시작 6일 전 ~ 당일 취소</span>
                <strong className="text-red-500">환불 불가</strong>
              </li>
            </ul>
            <p className="text-xs text-neutral-500 mt-4 leading-relaxed bg-neutral-100 p-3 rounded-lg">
              * 항공권 취소 수수료는 해당 항공사의 약관에 따릅니다.<br/>
              * 질병 등 불가항력적인 사유로 중도 귀국 시, 남은 기간에 대한 비용은 당사 규정에 따라 제반 비용 공제 후 정산됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
