# Detailed solution - R666

**Approach.** Dynamic range is the ratio of the largest signal to the noise. Halving the allowed swing therefore requires halving the rms noise voltage. For $kT/C$ noise the rms noise *voltage* goes as $1/\sqrt C$, so halving it requires four times the capacitance.

### Step 1 — Dynamic range and what must change

Define the dynamic range (DR) as the ratio of the maximum rms signal to the rms noise:

$$DR = \frac{V_{sig,max}}{v_{n,rms}} .$$

After the supply is halved, the maximum allowable swing is also halved: $V_{sig,max} \to V_{sig,max}/2$. To keep DR constant the noise must scale by the same factor:

$$v_{n,rms} \to \frac{v_{n,rms}}{2}.$$

In terms of noise *power* (mean-square voltage), this is a factor of 4:

$$\overline{v_n^2} \to \frac{\overline{v_n^2}}{4}.$$

### Step 2 — The $kT/C$ noise of a sampling capacitor

When a capacitor $C$ is connected through a switch (on-resistance $R$) to a voltage and then disconnected, the switch's thermal noise, with one-sided density $4kTR$, is filtered by the RC network and frozen on the capacitor. The total mean-square noise is obtained by integrating over all frequencies:

$$
\begin{aligned}
\overline{v_n^2} &= \int_0^\infty \frac{4kTR}{1 + (2\pi fRC)^2}\,df\\
&= 4kTR\cdot\frac{1}{2\pi RC}\cdot\frac{\pi}{2}\\
&= 4kTR\cdot\frac{1}{4RC} = \frac{kT}{C},
\end{aligned}
$$

using $\int_0^\infty dx/(1 + x^2) = \pi/2$ with $x = 2\pi fRC$. Here $k$ is Boltzmann's constant and $T$ the absolute temperature. The resistance cancels: a larger $R$ produces more noise density but a proportionally smaller bandwidth. Hence

$$\overline{v_n^2} = \frac{kT}{C}, \qquad v_{n,rms} = \sqrt{\frac{kT}{C}} .$$

The rms noise *voltage* is inversely proportional to the **square root** of the capacitance.

### Step 3 — Required capacitor scaling

Let the new capacitance be $C' = mC$. The requirement of Step 1 is

$$
\begin{aligned}
\sqrt{\frac{kT}{C'}} &= \frac12\sqrt{\frac{kT}{C}}\\
\frac{kT}{C'} &= \frac14\cdot\frac{kT}{C}\qquad\text{(square both sides)}\\
C' &= 4C .
\end{aligned}
$$

So $m = 4$.

**Numerical check** at $T = 300$ K, with $kT = (1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K}) = 4.14\times10^{-21}$ J:

$$
\begin{aligned}
C = 1\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{1\times10^{-12}\ \mathrm{F}}} = \sqrt{4.14\times10^{-9}}\ \mathrm{V} = 64.3\ \mu\mathrm{V},\\
C = 4\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{4\times10^{-12}\ \mathrm{F}}} = \sqrt{1.035\times10^{-9}}\ \mathrm{V} = 32.2\ \mu\mathrm{V}.
\end{aligned}
$$

Exactly half, as required.

### Step 4 — Which capacitors, and what stays the same

- **All capacitors** in the circuit (sampling, feedback, load) carry $kT/C$ noise, so all of them are multiplied by 4.
- Scaling them all by the same factor keeps every **capacitor ratio** unchanged, so the closed-loop gain of the switched-capacitor amplifier (e.g. $C_S/C_F$) and its feedback factor are preserved.

**Energy view (intuition).** The squared dynamic range is

$$DR^2 = \frac{V_{sig,max}^2}{kT/C} = \frac{C\,V_{sig,max}^2}{kT},$$

i.e. the signal energy stored on the capacitor compared with the thermal energy $kT$. Keeping DR constant means keeping $CV_{sig,max}^2$ constant: halving $V$ requires $4C$, because $4C\,(V/2)^2 = CV^2$.

The price is area (four times the capacitor area) and, for the same speed, power: the op amp must now charge four times the capacitance (see the related question on scaling $G_m$).

### Result

All capacitors must be **scaled up by a factor of 4**. Since $v_{n,rms} = \sqrt{kT/C}$, halving the noise voltage requires reducing $\overline{v_n^2} = kT/C$ by 4, i.e. $C \to 4C$. Capacitor ratios, and hence the amplifier's gain, are unchanged.

**Common mistake.** Doubling the capacitors. That would be right if the noise *voltage* were proportional to $1/C$, but it is the noise *power* $\overline{v_n^2}$ that goes as $1/C$; the rms voltage goes as $1/\sqrt C$, so doubling $C$ only reduces the noise by $\sqrt2$ and the dynamic range drops by $\sqrt2$ (3 dB).

**Common mistake.** Reducing the capacitors because "lower voltages need smaller capacitors" or to save area. A smaller $C$ *increases* $kT/C$ noise, exactly the opposite of what a smaller signal swing requires.
