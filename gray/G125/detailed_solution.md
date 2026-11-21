# Detailed solution - G125

Differentiate the cubic transfer characteristic to get the incremental gain as a function of the instantaneous input, then evaluate it at the three instants of the sine wave.

### Step 1 — Incremental gain

With $v_o=a_1v_i+a_2v_i^2+a_3v_i^3$,

$$
A_v=\frac{dv_o}{dv_i}=a_1+2a_2v_i+3a_3v_i^2 .
$$

### Step 2 — Values at the peaks and at the zero crossing

For $v_i=\hat v_i\sin\omega t$, the input is $+\hat v_i$ at its maximum, $0$ at the zero crossing and $-\hat v_i$ at its minimum. Substituting,

$$
\begin{aligned}
A_v^+&=a_1+2a_2\hat v_i+3a_3\hat v_i^2,\\
A_{vQ}&=a_1,\\
A_v^-&=a_1-2a_2\hat v_i+3a_3\hat v_i^2.
\end{aligned}
$$

The quadratic term $a_2$ changes the gain in opposite directions at the two extremes, while the cubic term $a_3$ changes it by the same amount $3a_3\hat v_i^2$ at both, because $v_i^2$ is the same for $\pm\hat v_i$.
