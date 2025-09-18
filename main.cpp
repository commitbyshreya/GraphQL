// #include <iostream>
// #include <string>
// using namespace std;

// //** ENCAPSULATION: wrapping of data/properties + member functions in a sigle class ** 
// // -> also promotes data hiding by declaring vars private
// // 
// // */
// class Teacher{
// private:
// // if you set any condition for setter method for set salary eg s > 0 then it will pass through validation
// // but if salary declared in public it will bypass the validation
//     double salary;
// public:
// //properties //attributes
//     string name;
//     string dept;
//     float* agePtr;  // ptr does not point to any mem address
// //Constructor: 1. same name as class 2. no return type 3. called once on object createion
// // 4. memory is allocated when the inbuilt/user made constructor is called by the compiler 
// //.   for creating an object, mem is allocated for the obj not the class

//     Teacher(){
//         dept = "Computer";
//     }
//     //** Deep copy - copies entire object along with address pointer to the memory 
//     //** Shallow copy - if there is pointer it will create a new pointer adress for that objects property */
//     Teacher(string name, double salary, double age){ //constuctor overloading
//         this->name = name;  // this.name says that the name variable of the given object
//         this->salary = salary;  
//         agePtr = new float;  // here ptr is being pointed to a new mem addres
//         *agePtr = age;  // here age eg 18 is stored in that mem location pointed by *age
        
//     }

//     // *** Destructor - deletes the dynamic memeory allocated to the object , eg memeory in the heap
//     // it is also automatically called
//     ~Teacher(){
//         cout<<"Hello im a destructor";
//         delete agePtr;
//     }
//     //methos //member functions
//     void changeDpt(string newDept){
//         dept = newDept;
//     }

//     //setter
//     void setSal(double s){
//         if(s>=0){
//             salary = s;
//         }
      
//     }

//     //getter
//     double getSal(){
//         return salary;
//     }

//     void getInfo(){
//         cout<<"name: "<<name<<endl;
//         cout<<"dept: "<<dept<<endl;
//         cout<<"salary: "<<salary<<endl;
//     }
    
// };

// int main() {
//     Teacher t1("shreya",75000,21);
//     // Teacher t2("sidd",75000,44);
//     t1.getInfo();
//     // t2.getInfo();
//     return 0;
// }


#include <iostream>
using namespace std;

class A{
    public:

    A(){
        cout<<"i am A";
    }

    void show(){
        cout<<"A ka show";
    }

};
class B: public A{
    public:
    
    B():A(){
        cout<<"i am B";
    }


    void show(){
              A::show();
        cout<<"b ka show";
  
    }

};

int main() {
    B obj;
    obj.show();
    return 0;
}