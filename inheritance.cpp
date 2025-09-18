#include <iostream>
#include <string>
using namespace std;

class Person{
public:
    string name;
    int age;

    Person(string name, int age){
        this->name = name;
        this->age = age;
    }
};
class Teacher{
    string sub;
    double salary;
}
//** Inheritance : properties and member functions of base class are passed on to derived class */
//Signle Inheritance
class Student : public Person{
public:
    int roll;

    Student(string name, int age, int roll) : Person(name, age){
        this->roll = roll;
    }

    void getInfo(){
        cout<<"name: "<<name<<" age: "<<age;
    }
};

//Multiple Inheritance
class TA : public Person, public Teacher{
    
}



int main() {

    Student st("shreya", 21, 22);
    st.getInfo();
    
    return 0;
}