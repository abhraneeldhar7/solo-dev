import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function CppPage() {
    return (
        <div className="referenceMain">
            <h1 className="header">C++</h1>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">How to C++</h1>
            <h1 className="topic2"><CheckCheck />Manual Memory Management</h1>
            <div className="textSection">
                <p>C++ doesn’t have garbage collection. Use smart pointers to manage memory automatically.</p>
                <CodeSnippet code={
                    `std::unique_ptr<int> ptr = std::make_unique<int>(10);  // Automatically managed memory
// No need to call delete, memory is freed when ptr goes out of scope`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Header Files and Separate Compilation</h1>
            <div className="textSection">
                <p>Use header files for declarations and source files for definitions. Use include guards to prevent multiple inclusions.</p>
                <CodeSnippet code={
                    `#ifndef MY_HEADER_H
#define MY_HEADER_H
// Declarations go here
#endif`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strong Typing and Explicit Casting</h1>
            <div className="textSection">
                <p>C++ is strongly typed. Use explicit casting for type conversions.</p>
                <CodeSnippet code={
                    `double x = 5.5;
int y = static_cast<int>(x);  // Explicit cast to int`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Object-Oriented Features</h1>
            <div className="textSection">
                <p>Use `virtual` for methods you want to override in derived classes. Use `override` to make intentions clear.</p>
                <CodeSnippet code={
                    `class Base {
public:
    virtual void foo() { /*...*/ }
};

class Derived : public Base {
public:
    void foo() override { /*...*/ }
};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Standard Template Library (STL)</h1>
            <div className="textSection">
                <p>Use STL containers and algorithms for common tasks.</p>
                <CodeSnippet code={
                    `std::vector<int> vec = {1, 2, 3};
std::sort(vec.begin(), vec.end());  // Sorts the vector`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Move Semantics and Rvalue References</h1>
            <div className="textSection">
                <p>Use `std::move` to transfer ownership of resources.</p>
                <CodeSnippet code={
                    `std::string str1 = "Hello";
std::string str2 = std::move(str1);  // str1 is now in a valid but unspecified state`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Templates and Generic Programming</h1>
            <div className="textSection">
                <p>Use templates for generic functions and classes.</p>
                <CodeSnippet code={
                    `template <typename T>
T add(T a, T b) {
    return a + b;
}

int result = add(3, 4);  // result is 7`
                } />
            </div>









            <hr className="ruleTypeShi" />
            <h1 id="core-language-basics" className="topic1">Core Language Basics</h1>
            <h1 className="topic2"><CheckCheck />Syntax Rules</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📜 Basic syntax
int main() {
    int x = 10;          // Variable declaration
    std::cout << x;      // Output: 10
    return 0;            // Return statement
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Primitive Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏷️ Primitive types
int integer = 42;                // Integer
double floating = 3.14;          // Double-precision floating point
char character = 'A';            // Single character
bool boolean = true;             // Boolean (true/false)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Variables and Constants</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📦 Variable declarations
int x = 10;                      // Mutable variable
const int y = 20;                // Immutable constant
constexpr int z = 30;            // Compile-time constant`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Operators</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ➕ Arithmetic operators
int sum = x + y;                 // Addition
int diff = x - y;                // Subtraction

// 🔀 Logical operators
bool result = (x > 5) && (y < 30); // Logical AND

// 🔄 Ternary operator
int max = (x > y) ? x : y;       // Conditional assignment`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="memory-management" className="topic1">Memory Management</h1>
            <h1 className="topic2"><CheckCheck />Stack vs Heap</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏗️ Stack allocation
int stackVar = 10;               // Allocated on the stack

// 🏗️ Heap allocation
int* heapVar = new int(20);      // Allocated on the heap
delete heapVar;                  // Manual deallocation required`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Smart Pointers</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧠 Smart pointers
std::unique_ptr<int> uPtr = std::make_unique<int>(10); // Unique ownership
std::shared_ptr<int> sPtr = std::make_shared<int>(20); // Shared ownership
std::weak_ptr<int> wPtr = sPtr;                        // Weak reference`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />RAII Principle</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🛡️ RAII (Resource Acquisition Is Initialization)
class Resource {
public:
    Resource() { /* Acquire resource */ }
    ~Resource() { /* Release resource */ }
};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Common Pitfalls</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ⚠️ Memory leaks
int* leak = new int(10);        // Never deleted

// ⚠️ Dangling pointers
int* ptr = new int(10);
delete ptr;
*ptr = 20;                      // Undefined behavior`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 id="object-oriented-programming" className="topic1">Object-Oriented Programming</h1>

            <h1 className="topic2"><CheckCheck />Classes vs Structs</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏛️ Class (default access: private)
class MyClass {
    int privateVar;             // Private by default
public:
    int publicVar;              // Explicitly public
};

// 🏛️ Struct (default access: public)
struct MyStruct {
    int publicVar;              // Public by default
private:
    int privateVar;             // Explicitly private
};`
                } />
                <p>Use <strong>classes</strong> for encapsulation and <strong>structs</strong> for data grouping.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Constructors</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏗️ Default/Parameterized/Copy/Move Constructors
class Example {
public:
    Example() {}                              // Default
    Example(int x) : val(x) {}                // Parameterized
    Example(const Example& other) {           // Copy
        val = other.val;
    }
    Example(Example&& other) noexcept {       // Move
        val = std::exchange(other.val, 0);
    }
private:
    int val;
};`
                } />
                <p>Constructors initialize objects. Use <strong>initializer lists</strong> for efficiency.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Destructors</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧹 Destructor (RAII cleanup)
class FileHandler {
public:
    ~FileHandler() {
        if (file) fclose(file);   // Release resource
    }
private:
    FILE* file;
};`
                } />
                <p>Destructors automatically release resources when objects go out of scope.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Inheritance Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧬 Single inheritance
class Derived : public Base { /*...*/ };

// 🧬 Multiple inheritance
class Derived : public Base1, public Base2 { /*...*/ };

// 🧬 Virtual inheritance (prevents diamond problem)
class Derived : virtual public Base { /*...*/ };`
                } />
                <p>Use <strong>public inheritance</strong> for "is-a" relationships. Avoid multiple inheritance unless necessary.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Polymorphism</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎯 Virtual functions and overriding
class Shape {
public:
    virtual double area() const = 0;  // Pure virtual (abstract class)
};

class Circle : public Shape {
public:
    double area() const override {    // Must implement
        return 3.14 * radius * radius;
    }
};`
                } />
                <p>Mark base class methods as <strong>virtual</strong>. Use <strong>override</strong> to ensure correct polymorphism.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Encapsulation</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔒 Private members with public getters/setters
class BankAccount {
public:
    double getBalance() const { return balance; }
    void deposit(double amount) { balance += amount; }
private:
    double balance = 0;   // Hidden internal state
};`
                } />
                <p>Expose minimal interfaces. Keep data <strong>private</strong> to enforce invariants.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Rule of Five</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🛑 Manage resources explicitly
class ResourceHolder {
public:
    ResourceHolder() { ptr = new int[100]; }  // Constructor
    ~ResourceHolder() { delete[] ptr; }       // Destructor
    ResourceHolder(const ResourceHolder& other) {  // Copy constructor
        ptr = new int[100];
        std::copy(other.ptr, other.ptr + 100, ptr);
    }
    ResourceHolder& operator=(const ResourceHolder& other) { // Copy assignment
        if (this != &other) {
            delete[] ptr;
            ptr = new int[100];
            std::copy(other.ptr, other.ptr + 100, ptr);
        }
        return *this;
    }
    ResourceHolder(ResourceHolder&& other) noexcept { // Move constructor
        ptr = other.ptr;
        other.ptr = nullptr;
    }
    ResourceHolder& operator=(ResourceHolder&& other) noexcept { // Move assignment
        delete[] ptr;
        ptr = other.ptr;
        other.ptr = nullptr;
        return *this;
    }
private:
    int* ptr;
};`
                } />
                <p>If you define a destructor, copy/move operations, you likely need all five.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Friend Functions/Classes</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🤝 Granting access to private members
class SecretKeeper {
    friend class TrustedFriend;   // Friend class
    friend void peekSecret(const SecretKeeper&); // Friend function
private:
    int secret = 42;
};

class TrustedFriend {
public:
    static int getSecret(const SecretKeeper& sk) { return sk.secret; }
};`
                } />
                <p>Use <strong>friend</strong> sparingly to break encapsulation only when necessary.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Static Members</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔄 Shared class-level data
class Counter {
public:
    static int count;            // Declaration
    Counter() { count++; }
    ~Counter() { count--; }
};
int Counter::count = 0;          // Definition (required)`
                } />
                <p><strong>Static</strong> members belong to the class, not individual objects.</p>
            </div>

            <h1 className="topic2"><CheckCheck />Operator Overloading</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ➕ Custom operator behavior
class Vector {
public:
    Vector operator+(const Vector& other) const {
        return Vector(x + other.x, y + other.y);
    }
private:
    double x, y;
};`
                } />
                <p>Overload operators to enable natural syntax for custom types.</p>
            </div>






            <hr className="ruleTypeShi" />
            <h1 id="stl" className="topic1">Standard Template Library (STL)</h1>
            <h1 className="topic2"><CheckCheck />Containers</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📦 STL containers
std::vector<int> vec = {1, 2, 3};       // Dynamic array
std::map<std::string, int> map = {{"a", 1}, {"b", 2}}; // Key-value pairs`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Algorithms</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔧 STL algorithms
std::sort(vec.begin(), vec.end());      // Sort a vector
auto it = std::find(vec.begin(), vec.end(), 2); // Find an element`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Iterators</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔄 Iterators
for (auto it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it;                   // Access element
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="modern-cpp" className="topic1">Modern C++ Features</h1>
            <h1 className="topic2"><CheckCheck />Auto Type Deduction</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🤖 Auto keyword
auto x = 10;                            // x is int
auto y = 3.14;                          // y is double`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Move Semantics</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🚚 Move semantics
std::string str1 = "Hello";
std::string str2 = std::move(str1);     // str1 is now empty`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Lambda Expressions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🐑 Lambda functions
auto lambda = [](int x) { return x * x; };
int result = lambda(5);                 // result is 25`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="templates" className="topic1">Templates and Generic Programming</h1>
            <h1 className="topic2"><CheckCheck />Function Templates</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧩 Function template
template <typename T>
T add(T a, T b) {
    return a + b;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Class Templates</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏛️ Class template
template <typename T>
class Box {
public:
    T value;
};`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="error-handling" className="topic1">Error Handling and Safety</h1>
            <h1 className="topic2"><CheckCheck />Exception Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🚨 Exception handling
try {
    throw std::runtime_error("Error!");
} catch (const std::exception& e) {
    std::cerr << e.what();
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Const Correctness</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔒 Const correctness
const int x = 10;
int y = x;                              // Allowed
x = 20;                                 // Error: x is const`
                } />
            </div>
        </div>
    )
}