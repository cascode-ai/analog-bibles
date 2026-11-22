# Detailed solution - A066

Evaluate the three terms of the bracket one at a time, converting COX to the same area unit as NFS, then multiply by the thermal voltage and add the result to $V_T$.

### Step 1 — Thermal voltage and the surface-state term

At $T=300$ K,

$$
\frac{kT}{q}=\frac{(1.381\times10^{-23}\ \mathrm{J/K})(300\ \mathrm K)}{1.602\times10^{-19}\ \mathrm C}=25.85\ \mathrm{mV}.
$$

NFS is given per cm², so COX must be expressed per cm²: $24.7\times10^{-4}\ \mathrm{F/m^2}=2.47\times10^{-7}\ \mathrm{F/cm^2}$. The fast-surface-state term is then dimensionless:

$$
\frac{q\cdot\mathrm{NFS}}{\mathrm{COX}}=\frac{(1.602\times10^{-19}\ \mathrm C)(7\times10^{11}\ \mathrm{cm^{-2}})}{2.47\times10^{-7}\ \mathrm{F/cm^2}}=0.454 .
$$

### Step 2 — Body term

With $v_{SB}=0$, $f_s=f_n=1$ and $\mathrm{PHI}=0.7$ V:

$$
\frac{\mathrm{GAMMA}\cdot f_s\,(\mathrm{PHI}+v_{SB})^{1/2}+f_n(\mathrm{PHI}+v_{SB})}{2(\mathrm{PHI}+v_{SB})}
=\frac{(0.4\ \mathrm{V^{1/2}})(0.837\ \mathrm{V^{1/2}})+0.7\ \mathrm V}{2(0.7\ \mathrm V)}=\frac{0.335+0.7}{1.4}=0.739 .
$$

This term reflects the depletion-layer capacitance, which, in series with the oxide capacitance, divides the gate voltage before it reaches the surface.

### Step 3 — $f_{ast}$ and $V_{ON}$

$$
f_{ast}=25.85\ \mathrm{mV}\times(1+0.454+0.739)=25.85\ \mathrm{mV}\times2.193=56.7\ \mathrm{mV},
$$

$$
V_{ON}=V_T+f_{ast}=0.7\ \mathrm V+0.0567\ \mathrm V=0.757\ \mathrm V .
$$

The transition to weak inversion lies about 57 mV above $V_T$. The bracket, 2.19, plays the role of the subthreshold slope factor $n$: below $V_{ON}$ the current falls by a factor $e$ for every $n\,kT/q\approx57$ mV decrease in $v_{GS}$.
