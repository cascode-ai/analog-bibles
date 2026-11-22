# Detailed solution - alsim-06-6-10

The op amp has no ground terminal: it only senses its input voltages relative to its own supplies, and it produces its output relative to them. So shift every node voltage by $-V_{cm}$, which makes the supplies quiet. The circuit then becomes a follower driven by $-V_{cm}$ at the non-inverting input, and the ground-referenced output is recovered at the end by adding $V_{cm}$ back. Describe the op amp by its differential gain $A_v$ and common-mode gain $A_c$:

$$
v_{out}=A_v(V_1-V_2)+A_c\frac{V_1+V_2}{2},
$$

with all voltages measured from the supply mid-point.

### Step 1 — Shift all voltages by $-V_{cm}$

Primed voltages are measured from the supply mid-point, so $V'=V-V_{cm}$. Then $V'_1=0-V_{cm}=-V_{cm}$, the supplies are constant, and the follower connection gives $V'_2=v'_{out}$:

$$
v'_{out}=A_v(-V_{cm}-v'_{out})+\frac{A_c}{2}(-V_{cm}+v'_{out}) .
$$

Solving for $v'_{out}$:

$$
v'_{out}\left(1+A_v-\frac{A_c}{2}\right)=-V_{cm}\left(A_v+\frac{A_c}{2}\right)\;\Rightarrow\;v'_{out}=-V_{cm}\,\frac{A_v+A_c/2}{1+A_v-A_c/2}.
$$

### Step 2 — Return to the ground reference

The measured output is $V_{out}=v'_{out}+V_{cm}$:

$$
\frac{V_{out}}{V_{cm}}=1-\frac{A_v+A_c/2}{1+A_v-A_c/2}=\frac{1-A_c}{1+A_v-A_c/2}\approx\frac{1-A_c}{A_v}=\frac{1}{A_v}-\frac{A_c}{A_v}\qquad(A_v\gg1).
$$

The simple argument, "moving the supplies is a common-mode input of $-V_{cm}$, so $V_{out}=A_cV_{cm}/(1+A_v)$", misses the term 1. The output is measured against ground, so it moves together with the supplies.

### Step 3 — When it equals 1/CMRR

$1/\mathrm{CMRR}=|A_c|/A_v$, so the reading approximates it only when the "1" is negligible:

$$
\frac{V_{out}}{V_{cm}}\approx\frac{A_c}{A_v}\quad\text{only if}\quad|A_c|\gg1 .
$$

A typical op amp has $|A_c|\lesssim1$. Then the reading is dominated by $1/A_v$, and the scheme does not measure the CMRR. Equivalently, moving both supplies together excites both supply gains. Since shifting every node by the same amount changes nothing, $A_{dd}+A_{ss}=1-A_c$, and the result is the combined supply rejection:

$$
\frac{V_{out}}{V_{cm}}=\frac{A_{dd}+A_{ss}}{1+A_v-A_c/2}\approx\frac{1}{\mathrm{PSRR}^+}+\frac{1}{\mathrm{PSRR}^-}\quad(\text{with signs}).
$$

### Step 4 — Check by simulation

The two-stage op amp of alsim-06-3-07 was simulated three ways at 10 Hz:
- in the circuit of [Fig. 1], with ±2.5-V sources stacked on $V_{cm}$ and the follower's non-inverting input grounded;
- with quiet supplies, to obtain $A_v$ and $A_c$ by the method of alsim-06-6-06;
- in the direct configuration, with $V_{cm}$ in series with both inputs.

| Quantity | Value |
|---|---|
| $A_v$ | 3336 (70.5 dB) |
| $A_c$ | +0.216 (−13.3 dB) |
| Formula $(1-A_c)/(1+A_v-A_c/2)$ | 2.350 × 10⁻⁴ (−72.6 dB) |
| Simulated $V_{out}/V_{cm}$, [Fig. 1] | 2.349 × 10⁻⁴ (−72.6 dB) |
| 1/CMRR from the direct configuration | 6.47 × 10⁻⁵ (−83.8 dB) |

The simulation reproduces the derived formula exactly. Because $A_c=0.22$ is small, the [Fig. 1] reading is off from the true 1/CMRR by the factor $(1-A_c)/A_c=3.6$, i.e. 11 dB. The scheme would understate this op amp's CMRR by 11 dB.

### Step 5 — Practical problems

- **Wrong quantity.** As shown above, the scheme measures the combined power-supply rejection, which equals 1/CMRR only when $|A_c|\gg1$.
- **Floating supplies.** The supplies must float relative to signal ground, e.g. batteries or isolated supplies. Their capacitance to ground carries part of $V_{cm}$ and corrupts the measurement at higher frequencies.
- **Ground returns.** Anything returned to ground instead of to the moving supplies injects extra signal: the load, a bias network, substrate or well contacts, the input source. In a simulation, a load capacitor from the output to ground does the same at high frequency.
- **Operating point.** The dc bias of the follower must stay inside the ICMR and output range while the supplies move, so $V_{cm}$ must be small. The follower's offset shifts the operating point.
