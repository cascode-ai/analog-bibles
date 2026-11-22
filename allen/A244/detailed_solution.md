# Detailed solution - A244

PSRR compares the gain from the signal input with the gain from a supply. Like the offset and CMRR sources, a supply effect can be represented by an input-referred voltage source whose value, multiplied by the open-loop gain, gives the observed output response to the supply. Find the required value from the definition and check it.

### Step 1 — Supply gain implied by the definition

Let $A_{dd}=v_o/v_{dd}$ (signal inputs grounded) be the small-signal gain from the positive supply to the output. The definition reads

$$
\mathrm{PSRR}^+=\frac{v_o/v_{in}\ (v_{dd}=0)}{v_o/v_{dd}\ (v_{in}=0)}=\frac{A_v}{A_{dd}}
\quad\Rightarrow\quad A_{dd}=\frac{A_v}{\mathrm{PSRR}^+},
$$

and likewise $A_{ss}=A_v/\mathrm{PSRR}^-$ for the negative supply.

### Step 2 — Input-referred supply sources

Add two voltage-controlled voltage sources in series with an input of the ideal op amp, next to $V_{OS}$ and the $v_1/\mathrm{CMRR}$ source:

$$
\frac{v_{dd}}{\mathrm{PSRR}^+}\qquad\text{and}\qquad\frac{v_{ss}}{\mathrm{PSRR}^-},
$$

where $v_{dd}$ and $v_{ss}$ are the small-signal variations of $V_{DD}$ and $V_{SS}$. Their polarity follows the sign of the corresponding supply gain; for frequency-dependent rejection they become $v_{dd}/\mathrm{PSRR}^+(s)$ and $v_{ss}/\mathrm{PSRR}^-(s)$.

### Step 3 — Check against the definition

With the signal inputs grounded and only $v_{dd}$ present, the ideal op amp sees the differential input $v_{dd}/\mathrm{PSRR}^+$, so

$$
v_o=A_v\frac{v_{dd}}{\mathrm{PSRR}^+}\quad\Rightarrow\quad \frac{v_o}{v_{dd}}=\frac{A_v}{\mathrm{PSRR}^+}=A_{dd},
$$

exactly the supply gain of Step 1. The same holds for $v_{ss}$ and $\mathrm{PSRR}^-$.

### Step 4 — Complete small-signal model

By superposition, with all input-referred sources present,

$$
v_{out}\approx A_v\Big[v_1-v_2+\frac{v_1}{\mathrm{CMRR}}+V_{OS}+\frac{v_{dd}}{\mathrm{PSRR}^+}+\frac{v_{ss}}{\mathrm{PSRR}^-}\Big].
$$

Equivalently, sources $A_{dd}v_{dd}$ and $A_{ss}v_{ss}$ could be added at the output, but the input-referred form matches the structure of the model in the figure.
