# ExQute: Your Local Quantum Circuit Simulator ⚛️

## 📄 Overview

**ExQute** is an intuitive, local **quantum simulator application** designed for users to easily **develop, test, and analyze quantum circuits** directly on their personal machines.

---

## ✨ Key Features

* **Local Deployment:** Download and run the application entirely on your local machine.
* **Visual Circuit Builder:** Create circuits using a simple **pick-and-drop interface** for connecting quantum gates.
* **Extensive Gate Library:** Access a wide variety of quantum gates, from **single-qubit to three-qubit gates**.
* **Immediate Results:** Click **Run** to execute the circuit and instantly view the output in the results panel.
* **Save & Load:** Easily **save** your circuit designs to share with friends or teachers, and **load** them later.
* **Explain Feature:** Access a detailed breakdown of the computation process to understand **how each step and gate** influenced the final outcome.

---

## 🙋 Who Can Use ExQute?

This application is perfect for **anyone who has the passion and interest to learn quantum circuits** and explore quantum computing concepts hands-on.

---

## 🚀 How to Work with ExQute

Thank you for downloading ExQute! Here is a quick guide to get you started:

1.  **Define Parameters:**
    * At the start, you must decide on your circuit's core settings: the number of **qubits**, the number of **columns (circuit depth)**, any necessary **angle** parameters (for parameterized gates), and the number of **shots** for the simulation.

2.  **Design the Circuit:**
    * In the left panel, you will find the library of quantum gates.
    * **Select a gate** and place it precisely in the **Circuit Design Area**.
    * The design area is laid out like a matrix: **Rows correspond to qubits**, and **Columns correspond to time steps**. For example, if you pick an $R_x$ gate, clicking position `[0][0]` applies it to **Qubit 0** at **Time Step 0**.
    * **Crucially:** Remember to place a **Measurement (M)** gate on every qubit in the **last column** of your circuit to obtain measurable output.

3.  **Run and Analyze:**
    * After building your circuit, click the **Run** button.
    * The simulation will execute, and the output results and analysis will be displayed in the designated **Result and Analysis** section.

4.  **Explore More Options:**
    * The **"More..."** menu offers:
        * **Save:** To store your current circuit.
        * **Load:** To open a previously saved circuit.
        * **Explain:** Provides a detailed trace of the computation, letting you **track the process** step-by-step for better learning.

---

## ⚠️ Development Status & Feedback

**Please Note:** ExQute is still in the **developing stage**, and you might encounter errors. If you find any issues, please contact us via the provided contact page so we can fix them!

---

Once again, thank you for downloading and supporting the project.

**Happy Quantuming!**

*With Regards,*

*Your Friend*
