# Detailed solution - A448

DNL is the deviation of an output step from 1 LSB. The step at a transition depends on the difference between the capacitors switched in and switched out; it is largest where the most capacitance changes state at once, the MSB transition. Put the capacitor errors at their worst-case extremes there and compute the step.

### Step 1 — Output and LSB

The array is a capacitive divider onto the top plate, so for any code

$$
v_{OUT}=\frac{C_{on}}{C_{tot}}V_{REF},\qquad 1\,\mathrm{LSB}=\frac{V_{REF}}{256},
$$

where $C_{on}$ is the sum of the capacitors whose bits are 1 and $C_{tot}$ is the total array capacitance (nominally $2C$).

### Step 2 — Worst-case transition

Between codes $k$ and $k+1$ the bits that turn on and those that turn off together carry nominally $C/128$ of net change, but the error of the step is the sum of the errors of all capacitors that change state. At $0111\,1111\to1000\,0000$ every bit capacitor changes state: the MSB capacitor $C$ turns on while $C/2+\cdots+C/128=C(1-2^{-7})$ turns off. No other transition involves as much capacitance, so it gives the largest DNL.

### Step 3 — Step size with opposite tolerances

Let the MSB capacitor be $C(1+\delta)$ and all other capacitors, including the terminating one, be $(1-\delta)$ times nominal, with $\delta=0.005$. The total stays $C(1+\delta)+C(1-\delta)=2C$. Then

$$
\begin{aligned}
v_{OUT}(1000\,0000)&=\frac{C(1+\delta)}{2C}V_{REF}=128(1+\delta)\ \mathrm{LSB},\\
v_{OUT}(0111\,1111)&=\frac{C(1-2^{-7})(1-\delta)}{2C}V_{REF}=127(1-\delta)\ \mathrm{LSB},\\
\text{step}&=128(1+\delta)-127(1-\delta)=\left[1+(2^8-1)\delta\right]\ \mathrm{LSB}.
\end{aligned}
$$

### Step 4 — DNL value

$$
\mathrm{DNL}=\text{step}-1\,\mathrm{LSB}=(2^N-1)\delta=255\times0.005=+1.275\ \mathrm{LSB}.
$$

With the signs of the tolerances reversed the step is $1-1.275=-0.275$ LSB, so $\mathrm{DNL}=-1.275$ LSB and the DAC is nonmonotonic at this transition. An exhaustive check of all $2^9$ combinations of $\pm0.5\%$ on the nine capacitors gives the same extreme, $|\mathrm{DNL}|=1.275$ LSB, at the same transition.

The worst-case DNL is therefore $\pm1.275$ LSB, occurring at the MSB (midscale) transition $0111\,1111\leftrightarrow1000\,0000$.
