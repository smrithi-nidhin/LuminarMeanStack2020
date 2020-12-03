class Student
{
    static get collegename()
    {
        var clgname="Luminar";
        return clgname;
    }
    static printCollegeName()
    {
        var clgname="Luminar";
        console.log(clgname);

    }
    setStudent(rol,name,course,total)
    {
        this.rol=rol;
        this.name=name;
        this.course=course;
        this.total=total;
    }

    getStudent()
    {
        console.log("rol="+this.rol);
        console.log("name="+this.name);
        console.log("couse="+this.course);
        console.log("total="+this.total);
        Student.printCollegeName();
    }
}

class Myclass extends Student{};

var obj=new Myclass();
obj.setStudent("1","ajay","cs",80);
obj.getStudent();
//obj.getcollegename();

console.log(Myclass.clgname);