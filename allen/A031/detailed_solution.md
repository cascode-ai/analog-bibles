# Detailed solution - A031

The −3 dB frequency fixes the product $RC$. A larger resistor needs a smaller capacitor and vice versa, so express both areas in terms of the number of squares $N$, add them, and minimize the total.

### Step 1 — Resistor value and area

A resistor of $N$ squares with sheet resistance $R_\square=50\ \Omega/\square$ and width $W=5\ \mu$m has

$$
R=NR_\square=50N\ \Omega,\qquad
L=NW=5N\ \mu\mathrm m,\qquad
A_R=NW^2=25N\ \mu\mathrm m^2 .
$$

### Step 2 — Capacitor value and area

The pole of the first-order RC low-pass filter is at $f_{-3dB}=1/(2\pi RC)$. With $f_{-3dB}=1$ MHz,

$$
C=\frac{1}{2\pi Rf_{-3dB}}=\frac{1}{2\pi(50N\ \Omega)(10^6\ \mathrm{Hz})}=\frac{3.18\times10^{-9}}{N}\ \mathrm F .
$$

At $C_A=2\ \mathrm{fF/\mu m^2}$ the capacitor area is

$$
A_C=\frac{C}{C_A}=\frac{3.18\times10^{-9}\ \mathrm F}{(2\times10^{-15}\ \mathrm{F/\mu m^2})\,N}=\frac{1.59\times10^{6}}{N}\ \mu\mathrm m^2 .
$$

### Step 3 — Minimize the total area

$$
A(N)=25N+\frac{1.59\times10^6}{N}\ \mu\mathrm m^2,\qquad
\frac{dA}{dN}=25-\frac{1.59\times10^6}{N^2}=0 .
$$

$$
N=\sqrt{\frac{1.59\times10^6}{25}}=252.3\ \text{squares}.
$$

The second derivative $2(1.59\times10^6)/N^3>0$ confirms a minimum. At the optimum $25N=1.59\times10^6/N$: the resistor and capacitor areas are equal, the usual result for minimizing a sum of a term proportional to $N$ and a term proportional to $1/N$.

### Step 4 — Component values and areas

| | Value | Area |
|---|---|---|
| Resistor | $R=50\times252.3=12.6$ kΩ ($L=1262\ \mu$m) | $A_R=25\times252.3=6.31\times10^3\ \mu\mathrm m^2$ |
| Capacitor | $C=1/(2\pi\cdot12.6\ \mathrm{k\Omega}\cdot1\ \mathrm{MHz})=12.6$ pF | $A_C=12.6\ \mathrm{pF}/(2\ \mathrm{fF/\mu m^2})=6.31\times10^3\ \mu\mathrm m^2$ |

The total area is about $1.26\times10^4\ \mu\mathrm m^2$. As a check, $RC=(12.6\ \mathrm{k\Omega})(12.6\ \mathrm{pF})=159$ ns, and $1/(2\pi\cdot159\ \mathrm{ns})=1.00$ MHz.
