# Detailed solution - A032

Once the layout is fixed, the number of squares and the capacitor area no longer change; only the sheet resistance and the capacitance per unit area vary with the process. The −3 dB frequency is inversely proportional to $RC$, so its extremes occur when both tolerances push $RC$ in the same direction.

### Step 1 — How the corner frequency scales

$$
f_{-3dB}=\frac{1}{2\pi RC},\qquad R=NR_\square,\qquad C=A_CC_A .
$$

With $N$ and $A_C$ fixed, $R\propto R_\square$ and $C\propto C_A$, so

$$
f_{-3dB}=f_{nom}\,\frac{R_{\square,nom}}{R_\square}\cdot\frac{C_{A,nom}}{C_A},\qquad f_{nom}=1\ \mathrm{MHz}.
$$

The resistor varies by ±30 % and the capacitor by ±10 %, independently.

### Step 2 — Maximum frequency

Both components at their low limits, $R=0.7R_{nom}$ and $C=0.9C_{nom}$:

$$
f_{max}=\frac{1\ \mathrm{MHz}}{(0.7)(0.9)}=\frac{1\ \mathrm{MHz}}{0.63}=1.59\ \mathrm{MHz}.
$$

### Step 3 — Minimum frequency

Both at their high limits, $R=1.3R_{nom}$ and $C=1.1C_{nom}$:

$$
f_{min}=\frac{1\ \mathrm{MHz}}{(1.3)(1.1)}=\frac{1\ \mathrm{MHz}}{1.43}=0.699\ \mathrm{MHz}.
$$

### Step 4 — Interpretation

The worst-case range is 0.70–1.59 MHz, i.e. −30 % to +59 % about the nominal 1 MHz; the range is asymmetric because $f$ depends on $1/(RC)$. The result does not depend on the particular sizes chosen: with $R_{nom}\approx12.6$ kΩ and $C_{nom}\approx12.6$ pF, for example, $1/[2\pi(8.83\ \mathrm{k\Omega})(11.4\ \mathrm{pF})]$ gives the same 1.59 MHz. An absolute RC time constant is therefore poorly controlled in an integrated process, which is why precision filters rely on ratios of like components or on tuning.
