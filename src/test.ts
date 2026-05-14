const files = import.meta.glob('/public/activities/*', { eager: true }); console.log(files);
