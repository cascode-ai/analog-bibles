# Detailed solution - A453

Monotonicity requires every code increase to raise the output (in magnitude). Write the step at the transition where one large capacitor replaces all the smaller ones, include capacitor mismatch, and find when that step can change sign.

### Step 1 — Output as a sum of capacitor ratios

Charge transfer onto $C_X$ gives

$$
|v_{OUT}|=\frac{V_{REF}}{C_X}\sum_{i=0}^{N-1}b_iC_i,\qquad C_i=2^{N-1-i}C\ \text{(nominal)},\qquad 1\,\mathrm{LSB}=\frac{C}{C_X}V_{REF}=\frac{V_{REF}}{2^N}.
$$

Each output level is set by a different combination of capacitors, so mismatch between them changes the size of each step.

### Step 2 — Step at the MSB transition

At $0111\ldots1\to1000\ldots0$ the MSB capacitor turns on while all the others turn off, so the step is

$$
\Delta|v_{OUT}|=\frac{V_{REF}}{C_X}\Big(C_0-\sum_{i=1}^{N-1}C_i\Big).
$$

Nominally $C_0=2^{N-1}C$ and $\sum_{i\ge1}C_i=(2^{N-1}-1)C$, giving one LSB. Let each capacitor have relative error $\pm\Delta C/C$, with the MSB capacitor low and the others high:

$$
\Delta|v_{OUT}|=\frac{V_{REF}}{C_X}\Big[2^{N-1}C\Big(1-\frac{\Delta C}{C}\Big)-(2^{N-1}-1)C\Big(1+\frac{\Delta C}{C}\Big)\Big]
=\Big[1-(2^N-1)\frac{\Delta C}{C}\Big]\ \mathrm{LSB}.
$$

So $\mathrm{DNL}=-(2^N-1)\Delta C/C$ LSB at this transition; other major-carry transitions (e.g. $0011\ldots1\to0100\ldots0$) give proportionally smaller values.

### Step 3 — Condition for nonmonotonicity

The step becomes negative, i.e. the output decreases when the code increases, if

$$
(2^N-1)\frac{\Delta C}{C}>1\quad(\mathrm{DNL}<-1\ \mathrm{LSB}).
$$

For example, with 0.2% matching this happens for $N\ge9$ ($511\times0.002=1.02$).

**Yes**, the DAC can be nonmonotonic. Its levels are formed by binary-weighted components, so monotonicity is not guaranteed by the structure (as it is in a resistor-string or thermometer-coded DAC); it holds only if the capacitor matching satisfies $(2^N-1)\Delta C/C<1$.
