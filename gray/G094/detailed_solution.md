# Detailed solution - G094

The peaking source obeys the same law as before, $I_{OUT}=I_{IN}\exp[-I_{IN}R/(nV_T)]$, but now $R$ is fixed and $I_{IN}$ is the unknown. This function of $I_{IN}$ rises, reaches a peak and then falls, so a target output current below the peak is reached at two input currents. Solve for both, then apply the weak-inversion condition $W/L>I_D/I_t$ to each.

### Step 1 — The transfer characteristic

With $M_1$'s gate at the top of $R$ and its drain (the gate of $M_2$) at the bottom, $V_{GS2}=V_{GS1}-I_{IN}R$. For identical devices in weak inversion, $I_D=(W/L)I_t\exp[(V_{GS}-V_t)/(nV_T)]$, so

$$
I_{OUT}=I_{IN}\exp\!\left(-\frac{I_{IN}}{I_0}\right),\qquad I_0=\frac{nV_T}R=\frac{(1.5)(26\ \mathrm{mV})}{10\ \mathrm{k\Omega}}=3.9\ \mu\mathrm A .
$$

Setting $dI_{OUT}/dI_{IN}=(1-I_{IN}/I_0)e^{-I_{IN}/I_0}=0$ gives the peak at $I_{IN}=I_0=3.9\ \mu\mathrm A$, where $I_{OUT,\max}=I_0/e=1.43\ \mu\mathrm A$. Since $0.1\ \mu\mathrm A<1.43\ \mu\mathrm A$, there is one solution on each side of the peak.

![Peaking-source transfer curve: output current versus input current for R = 10 kΩ, peaking at 1.43 µA and crossing the 0.1 µA target at 0.103 µA and 20.8 µA](/q/G094/solution-curves.svg)

### Step 2 — Low solution

On the rising side, $I_{IN}\ll I_0$, so the exponential is close to 1. Iterating $I_{IN}=(0.1\ \mu\mathrm A)\,e^{I_{IN}/I_0}$ from $I_{IN}=0.1\ \mu\mathrm A$:

$$
I_{IN}=(0.1\ \mu\mathrm A)\exp\!\left(\frac{0.1027\ \mu\mathrm A}{3.9\ \mu\mathrm A}\right)=(0.1\ \mu\mathrm A)(1.0267)=0.1027\ \mu\mathrm A .
$$

Here the resistor drops only $I_{IN}R=1.03$ mV, and the circuit is nearly a 1:1 mirror.

### Step 3 — High solution

On the falling side, take logarithms, $I_{IN}=I_0\ln(I_{IN}/0.1\ \mu\mathrm A)$, and iterate from 20 µA:

$$
I_{IN}=(3.9\ \mu\mathrm A)\ln\frac{20.8\ \mu\mathrm A}{0.1\ \mu\mathrm A}=(3.9\ \mu\mathrm A)(5.338)=20.8\ \mu\mathrm A .
$$

The resistor drops 208 mV, or $5.34\,nV_T$, which divides the current by 208. This branch is the one normally used to make $I_{OUT}\ll I_{IN}$.

### Step 4 — Minimum $W/L$ for each solution

Weak inversion requires $V_{GS}-V_t=nV_T\ln[I_D/((W/L)I_t)]<0$, that is $W/L>I_D/I_t$. $M_1$ carries the larger current $I_{IN}$, so it sets the limit for the identical pair:

| Solution | $I_{IN}$ | $W/L>I_{IN}/I_t$ |
|---|---|---|
| low | 0.1027 µA | 1.03 |
| high | 20.8 µA | 208 |

$M_2$ (0.1 µA) needs only $W/L>1$ in both cases. In summary: $I_{IN}=0.103\ \mu\mathrm A$ with $W/L\ge1.03$, or $I_{IN}=20.8\ \mu\mathrm A$ with $W/L\ge208$.
