// يمكنك إضافة تفاعلات JavaScript هنا
document.addEventListener("DOMContentLoaded", function() {
    console.log("الموقع جاهز!");
});
document.addEventListener("DOMContentLoaded", function() {
    const applyButtons = document.querySelectorAll('.job-item .button');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('تم التقديم للوظيفة بنجاح!');
        });
    });
});
function publishJob() {
    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobStartDate = document.getElementById('job-start-date').value;
    const jobSkills = document.getElementById('job-skills').value;
    const jobType = document.getElementById('job-type').value;

    if (jobTitle && jobDescription && jobLocation && jobStartDate && jobSkills && jobType) {
        alert('تم نشر الوظيفة بنجاح!');
        // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    } else {
        alert('الرجاء ملء جميع الحقول.');
    }
}