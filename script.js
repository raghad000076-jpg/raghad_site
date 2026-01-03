function registerGuest() {
    // استخدام prompt و isNaN كما ورد في المحاضرة 4
    let name = prompt("فضلاً، أدخل اسمك الكريم:");
    let count = prompt("عدد المرافقين:");

    if (name === "" || isNaN(count)) {
        alert("خطأ: يرجى إدخال بيانات صحيحة (الاسم نص والعدد رقم)"); // استخدام Alert
    } else {
        document.getElementById("guest-info").innerHTML = 
            `أهلاً بك سيد ${name}، تم تسجيل حضور ${count} مرافقين.`;
        document.getElementById("guest-info").style.display = "block";
    }
}