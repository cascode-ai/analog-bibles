# Detailed solution - A478

Apply the two given rules to each subDAC separately, using the weighting factors of the bits that subDAC actually controls within the $N$-bit word, and add the two contributions. The voltage-scaling DAC holds bits $0\ldots M-1$ and the charge-scaling DAC bits $M\ldots N-1$.

### Step 1 — Weighting factors

Bit $i$ of the $N$-bit DAC carries $2^{N-i-1}$ LSB. Hence

$$
\text{voltage DAC (bits }0\ldots M-1):\ 2^{N-1},\ \dots,\ 2^{N-M}=2^{K};\qquad
\text{charge DAC (bits }M\ldots N-1):\ 2^{N-M-1}=2^{K-1},\ \dots,\ 1 .
$$

### Step 2 — Resistor-string (MSB) contributions

The largest weighting factor among the resistor-string bits is that of the MSB, $2^{N-1}$:

$$
\mathrm{INL}(R)=2^{N-1}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

(Equivalently, $2^{M-1}\Delta R/R$ in $M$-bit LSBs, multiplied by $2^N/2^M=2^K$.) Each resistor of the string sets one step of the $M$-bit DAC, i.e. the weight of its least significant bit $M-1$, $2^{N-M}=2^K$:

$$
\mathrm{DNL}(R)=2^{K}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

### Step 3 — Capacitor-array (LSB) contributions

The largest weighting factor in the capacitor array is $2^{K-1}$ (its MSB, bit $M$):

$$
\mathrm{INL}(C)=2^{K-1}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
$$

The largest capacitor (weight $2^{K-1}$) causes the worst step at its own major transition, where it switches in and all smaller capacitors (total weight $2^{K-1}-1$) switch out. With their errors in opposite directions,

$$
\mathrm{DNL}(C)=\left(2^{K-1}+2^{K-1}-1\right)\frac{\Delta C}{C}=\left(2^{K}-1\right)\frac{\Delta C}{C}\ \ \mathrm{LSB};
$$

counting only the largest capacitor's own error would give $2^{K-1}\Delta C/C$.

### Step 4 — Totals

$$
\begin{aligned}
\mathrm{INL}&=\mathrm{INL}(R)+\mathrm{INL}(C)=2^{N-1}\frac{\Delta R}{R}+2^{K-1}\frac{\Delta C}{C}\ \ \mathrm{LSB},\\
\mathrm{DNL}&=\mathrm{DNL}(R)+\mathrm{DNL}(C)=2^{K}\frac{\Delta R}{R}+\left(2^{K}-1\right)\frac{\Delta C}{C}\approx2^{K}\left(\frac{\Delta R}{R}+\frac{\Delta C}{C}\right)\ \ \mathrm{LSB}.
\end{aligned}
$$

The INL is dominated by the resistor string because it carries the MSBs.
