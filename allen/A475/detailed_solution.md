# Detailed solution - A475

Express the given output in LSBs, subtract the ideal value to get the error as a function of $\varepsilon=\Delta C_x/C_x$ and of the two section codes, and find the code that maximizes it. The tolerance follows from limiting that worst-case error to ½ LSB.

### Step 1 — Output and error in LSBs

With $1\,\mathrm{LSB}=V_{REF}/64$, $A=4b_0+2b_1+b_2$ and $B=4b_3+2b_4+b_5$ (each 0–7), the given expression becomes

$$
\frac{v_{OUT}}{\mathrm{LSB}}=8\left(1-0.17\varepsilon\right)\left[A+\left(1+0.8\varepsilon\right)\frac B8\right]=\left(1-0.17\varepsilon\right)\left[8A+\left(1+0.8\varepsilon\right)B\right],
$$

while the ideal output is $8A+B$. The error is

$$
\text{error}=\left(1-0.17\varepsilon\right)\left[8A+(1+0.8\varepsilon)B\right]-(8A+B)
=\varepsilon\left(-1.36A+0.63B\right)-0.136\,\varepsilon^2B\ \ \mathrm{LSB}.
$$

The $\varepsilon^2$ term is negligible for the few-percent tolerances involved.

### Step 2 — Worst-case code

The two first-order terms have opposite signs, so they partly cancel when both $A$ and $B$ are large. The error magnitude is largest when the gain term is maximal and the LSB-weight term is absent: $A=7$, $B=0$ (code 111000), where

$$
|\text{error}|=1.36\times7\,|\varepsilon|=9.52\,|\varepsilon|\ \ \mathrm{LSB}
$$

exactly (no $\varepsilon^2$ term since $B=0$). The LSB-weight term alone can reach only $0.63\times7|\varepsilon|=4.41|\varepsilon|$ (code 000111), and at all ones the error is $(-9.52+4.41)\varepsilon=-5.11\varepsilon$ to first order, so taking all bits equal to 1 would underestimate the worst case.

### Step 3 — Required accuracy

$$
9.52\,|\varepsilon|\le0.5
\quad\Longrightarrow\quad
\left|\frac{\Delta C_x}{C_x}\right|\le\frac{0.5}{9.52}=0.0525 .
$$

An exhaustive check of all 64 codes with the exact expression gives the same limit, 5.252%, for either sign of $\varepsilon$. The coupling capacitor must therefore be accurate to about $\pm5.25\%$ (roughly ±5%).
