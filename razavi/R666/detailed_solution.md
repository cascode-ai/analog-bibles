# Detailed solution - R666

**Approach.** Halving the allowed swing at constant dynamic range requires halving the rms noise voltage. For $kT/C$ noise the rms noise *voltage* goes as $1/\sqrt C$, so halving it requires four times the capacitance.

### Step 1 — Dynamic range and what must change

With the dynamic range defined as the ratio of the maximum rms signal to the rms noise,

$$DR = \frac{V_{sig,max}}{v_{n,rms}} ,$$

halving the swing, $V_{sig,max} \to V_{sig,max}/2$, requires

$$v_{n,rms} \to \frac{v_{n,rms}}{2}, \qquad\text{i.e.}\qquad \overline{v_n^2} \to \frac{\overline{v_n^2}}{4}.$$

### Step 2 — The $kT/C$ noise of a sampling capacitor

The switch's thermal noise ($4kTR$), filtered by the RC network and frozen on the capacitor, gives

$$\overline{v_n^2} = \frac{kT}{C}, \qquad v_{n,rms} = \sqrt{\frac{kT}{C}} ,$$

independent of the switch resistance (a larger $R$ gives more noise density but proportionally less bandwidth). The rms noise *voltage* is inversely proportional to the **square root** of the capacitance.

### Step 3 — Required capacitor scaling

With the new capacitance $C' = mC$:

$$
\begin{aligned}
\sqrt{\frac{kT}{C'}} &= \frac12\sqrt{\frac{kT}{C}}\\
\frac{kT}{C'} &= \frac14\cdot\frac{kT}{C}\\
C' &= 4C ,
\end{aligned}
$$

so $m = 4$.

**Numerical check** at $T = 300$ K, with $kT = (1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K}) = 4.14\times10^{-21}$ J:

$$
\begin{aligned}
C = 1\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{1\times10^{-12}\ \mathrm{F}}} = \sqrt{4.14\times10^{-9}}\ \mathrm{V} = 64.3\ \mu\mathrm{V},\\
C = 4\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{4\times10^{-12}\ \mathrm{F}}} = \sqrt{1.035\times10^{-9}}\ \mathrm{V} = 32.2\ \mu\mathrm{V},
\end{aligned}
$$

exactly half, as required.

### Step 4 — Which capacitors, and what stays the same

**All capacitors** (sampling, feedback, load) carry $kT/C$ noise, so all are multiplied by 4. This keeps every **capacitor ratio**, so the closed-loop gain (e.g. $C_S/C_F$) and the feedback factor are preserved.

Equivalently,

$$DR^2 = \frac{V_{sig,max}^2}{kT/C} = \frac{C\,V_{sig,max}^2}{kT},$$

so constant DR means constant stored signal energy $CV_{sig,max}^2$: $4C\,(V/2)^2 = CV^2$. The price is four times the capacitor area and, for the same speed, four times the capacitance for the op amp to charge.

### Result

All capacitors must be **scaled up by a factor of 4**. Since $v_{n,rms} = \sqrt{kT/C}$, halving the noise voltage requires reducing $\overline{v_n^2} = kT/C$ by 4, i.e. $C \to 4C$. Capacitor ratios, and hence the amplifier's gain, are unchanged.

**Common mistake.** Doubling the capacitors. The noise *power* $\overline{v_n^2}$ goes as $1/C$, so the rms voltage goes as $1/\sqrt C$: doubling $C$ only reduces the noise by $\sqrt2$, and the dynamic range drops by $\sqrt2$ (3 dB).

**Common mistake.** Reducing the capacitors because "lower voltages need smaller capacitors". A smaller $C$ *increases* the $kT/C$ noise.
