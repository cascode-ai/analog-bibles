# Detailed solution - G349

Find the input voltage generator by shorting the input and referring every output noise current through $g_m$, and the input current generator by opening the input and asking whether any noise source needs an input current to explain it. With no gate current and no gate capacitance, the second answer is zero.

### Step 1 — Noise sources

With flicker noise, gate leakage and capacitances neglected, the only noise sources are the channel thermal noise $\overline{i_d^2}=4kT\tfrac23g_m\Delta f$ between drain and source, and the load thermal noise $\overline{i_L^2}=(4kT/R_L)\Delta f$ in parallel with $R_L$. Both are currents at the output node.

### Step 2 — Equivalent input noise voltage

With the input shorted, an input voltage $v_i$ would produce a drain current $g_mv_i$. The output noise currents are reproduced by $\overline{v_i^2}=(\overline{i_d^2}+\overline{i_L^2})/g_m^2$:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\,\frac{2}{3g_m}+\frac{4kT}{g_m^2R_L}.
$$

With $g_m=1$ mA/V and $R_L=10$ kΩ, $2/(3g_m)=667\ \Omega$ and $1/(g_m^2R_L)=100\ \Omega$:

$$
\frac{\overline{v_i^2}}{\Delta f}=(1.66\times10^{-20}\ \mathrm{V\cdot C})(667+100)\ \Omega=1.27\times10^{-17}\ \mathrm{V^2/Hz}
\quad(\approx3.6\ \mathrm{nV/\sqrt{Hz}}).
$$

The channel noise dominates; without the load term the result is $1.11\times10^{-17}$ V²/Hz. The load adds 15% because the voltage gain is only $g_mR_L=10$.

### Step 3 — Equivalent input noise current

With the input open, the gate draws no current and, with $C_{gs}$ neglected, there is no path through which an input current could reach the gate–source voltage. The output noise with the input open is therefore identical to that with the input shorted, and the voltage generator alone accounts for it. No input current generator is needed:

$$
\frac{\overline{i_i^2}}{\Delta f}\approx0 .
$$

At high frequencies $C_{gs}$ couples the drain noise back to the input and gate leakage adds shot noise, so a real MOS stage has a small nonzero noise current; both are excluded here.
