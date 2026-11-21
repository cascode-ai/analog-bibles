# Detailed solution - A479

Apply the two given rules to each subDAC with the weighting factors of the bits it controls in the $N$-bit word, and add the contributions. Now the charge-scaling DAC holds the MSBs (bits $0\ldots K-1$) and the voltage-scaling DAC the LSBs (bits $K\ldots N-1$).

### Step 1 — Weighting factors

Bit $i$ carries $2^{N-i-1}$ LSB, so

$$
\text{charge DAC (bits }0\ldots K-1):\ 2^{N-1},\ \dots,\ 2^{N-K}=2^{M};\qquad
\text{voltage DAC (bits }K\ldots N-1):\ 2^{N-K-1}=2^{M-1},\ \dots,\ 1 .
$$

### Step 2 — Capacitor-array (MSB) contributions

The largest weighting factor in the capacitor array is that of the MSB, $2^{N-1}$:

$$
\mathrm{INL}(C)=2^{N-1}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
$$

The worst step is the MSB transition, where the largest capacitor (weight $2^{N-1}$) switches in and everything below it, of total weight $2^{N-1}-1$ LSB, switches out. Taking, as for a binary array, the largest capacitor high and the lower-weight elements low by the same relative accuracy,

$$
\mathrm{DNL}(C)=\left(2^{N-1}+2^{N-1}-1\right)\frac{\Delta C}{C}=\left(2^{N}-1\right)\frac{\Delta C}{C}\ \ \mathrm{LSB}
$$

(counting only the largest capacitor's own error would give $2^{N-1}\Delta C/C$).

### Step 3 — Resistor-string (LSB) contributions

The largest weighting factor among the resistor-string bits is $2^{M-1}$ (bit $K$):

$$
\mathrm{INL}(R)=2^{M-1}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

Each resistor of the string sets one step of the whole DAC, whose weight is that of the LSB, $2^0=1$:

$$
\mathrm{DNL}(R)=\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

### Step 4 — Totals

$$
\begin{aligned}
\mathrm{INL}&=2^{M-1}\frac{\Delta R}{R}+2^{N-1}\frac{\Delta C}{C}\ \ \mathrm{LSB},\\
\mathrm{DNL}&=\frac{\Delta R}{R}+\left(2^{N}-1\right)\frac{\Delta C}{C}\approx\frac{\Delta R}{R}+2^{N}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
\end{aligned}
$$

Both INL and DNL are now dominated by the capacitors: this arrangement needs very accurate capacitors but tolerates loosely matched resistors.
