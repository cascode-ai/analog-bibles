# Detailed solution - G150

Two requirements fix the resistors: the differential gain sets the ratio $R_2/R_1$, and the dc output produced by the input offset current sets their absolute size. With matched resistor pairs both inputs see the same source resistance, so the average bias current cancels and only the offset current reaches the output.

### Step 1 — Gain ratio

With an ideal op amp, $V_+=V_1R_2/(R_1+R_2)$, and KCL at the inverting input with $V_-=V_+$ gives

$$
V_o=\left(1+\frac{R_2}{R_1}\right)V_+-\frac{R_2}{R_1}V_2=\frac{R_2}{R_1}\left(V_1-V_2\right).
$$

A gain of $-10$ from $V_2$ requires $R_2/R_1=10$.

### Step 2 — Output from the bias currents

Set $V_1=V_2=0$ and let $I_{B1}$ flow into the noninverting input and $I_{B2}$ into the inverting input. The noninverting input sees $R_1\parallel R_2$ to ground:

$$
V_+=-I_{B1}\left(R_1\parallel R_2\right).
$$

KCL at the inverting input, with $V_-=V_+$:

$$
\frac{0-V_-}{R_1}+\frac{V_o-V_-}{R_2}=I_{B2}\ \Rightarrow\ \frac{V_o}{R_2}=I_{B2}+V_-\left(\frac1{R_1}+\frac1{R_2}\right)=I_{B2}-I_{B1},
$$
$$
V_o=\left(I_{B2}-I_{B1}\right)R_2=-I_{OS}R_2,\qquad I_{OS}=I_{B1}-I_{B2}.
$$

The common part of the bias currents cancels; only the offset current, through $R_2$, appears at the output.

### Step 3 — Resistor values

$$
|I_{OS}|R_2\le10\ \mathrm{mV}\ \Rightarrow\ R_2\le\frac{10\ \mathrm{mV}}{100\ \mathrm{nA}}=100\ \mathrm{k\Omega},\qquad R_1=\frac{R_2}{10}\le10\ \mathrm{k\Omega}.
$$

For example, **$R_1=10\ \mathrm{k\Omega}$ and $R_2=100\ \mathrm{k\Omega}$**, which gives exactly 10 mV worst-case output; any smaller pair with the ratio 10 also works, at the cost of loading the sources more heavily.
