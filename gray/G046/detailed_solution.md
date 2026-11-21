# Detailed solution - G046

Parallel connection forces both transistors to share every terminal voltage. If, in every operating region, the drain current of a device is its width times a function of the terminal voltages that does not depend on width, the two currents simply add to the current of a single device whose width is the sum.

### Step 1 — Shared bias and common parameters

With gates, drains, sources and bodies tied together, both devices see the same $V_{GS}$, $V_{DS}$ and $V_{SB}$. They are identical apart from $W$: the same $L$, $k'$, $V_t$ (including body effect) and $\lambda$.

### Step 2 — Current proportional to width in every region

In each region the square-law current can be written $I_{Dk}=W_k\,f(V_{GS},V_{DS},V_{SB})$ with

$$
f=
\begin{cases}
0, & V_{GS}\le V_t\ \text{(cutoff)},\\[4pt]
\dfrac{k'}L\left[(V_{GS}-V_t)V_{DS}-\dfrac{V_{DS}^2}2\right], & V_{DS}<V_{GS}-V_t\ \text{(triode)},\\[10pt]
\dfrac{k'}{2L}(V_{GS}-V_t)^2(1+\lambda V_{DS}), & V_{DS}\ge V_{GS}-V_t\ \text{(saturation)}.
\end{cases}
$$

The region boundaries, $V_{GS}=V_t$ and $V_{DS}=V_{GS}-V_t$, do not depend on $W$, so both devices are always in the same region and use the same $f$. (The same factorization holds in weak inversion, where the current is proportional to $W/L$.)

### Step 3 — Sum of the currents

$$
I_D=I_{D1}+I_{D2}=W_1f+W_2f=(W_1+W_2)\,f(V_{GS},V_{DS},V_{SB}),
$$

which is exactly the drain current of one transistor of width $W_1+W_2$ and length $L$ at the same terminal voltages, for any bias. The parallel pair and the single wide device are therefore equivalent.

### Step 4 — Small-signal and capacitive equivalence

Because the currents add for all terminal voltages, their derivatives also add: $g_m$, $g_{mb}$ and $1/r_o$ of the pair are those of the $(W_1+W_2)/L$ device. To first order the capacitances also scale with width: gate area $(W_1+W_2)L$ and overlap $\propto W$. Narrow-width edge effects are neglected.
