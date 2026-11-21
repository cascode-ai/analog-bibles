# Detailed solution - A436

Find the largest output step the DAC can be asked to make, then require the slew-limited op amp to traverse it in the allowed time.

### Step 1 — Output voltage for a given code

The inverting input is a virtual ground, so every selected sink draws its current through the feedback resistor $R$, and the output rises by $R$ times that current:

$$
v_{OUT}=R\sum_{i=0}^{7}b_i\,\frac{I}{2^{i}}=RI\sum_{i=0}^{7}\frac{b_i}{2^{i}} .
$$

With $RI=(1\ \mathrm{k\Omega})(0.5\ \mathrm{mA})=0.5$ V, the LSB ($b_7$) is $0.5\ \mathrm V/128=3.906$ mV $=1\ \mathrm V/256$, and the full-scale range is $2RI=1$ V.

### Step 2 — Worst-case step

The largest change occurs between all zeros and all ones:

$$
\Delta v_{OUT,\max}=RI\sum_{i=0}^{7}2^{-i}=RI\left(2-2^{-7}\right)=(0.5\ \mathrm V)(1.9921875)=0.99609\ \mathrm V=\frac{255}{256}\ \mathrm V .
$$

Any other code transition is smaller, so this step sets the worst-case conversion time.

### Step 3 — Required slew rate

Apart from slewing the op amp is ideal (infinite gain and bandwidth), so the output follows a ramp of slope SR and reaches its final value exactly when the ramp ends; there is no additional linear settling. The conversion time is therefore $\Delta v_{OUT,\max}/\mathrm{SR}$, and $T\le2\ \mu\mathrm s$ requires

$$
\mathrm{SR}\ge\frac{\Delta v_{OUT,\max}}{T}=\frac{0.99609\ \mathrm V}{2\ \mu\mathrm s}=0.498\ \mathrm{V/\mu s}\approx0.5\ \mathrm{V/\mu s}.
$$
