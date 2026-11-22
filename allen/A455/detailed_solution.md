# Detailed solution - A455

With $\omega_a\to\infty$ the op amp is a pure gain $A=A_{vd}(0)$, so only the static error matters. Find the output by charge conservation at the inverting input with finite gain, express the relative error, and require it to be below 0.5 LSB of an 8-bit converter at full scale.

### Step 1 — Ideal output

The switch applies $-V_{REF}$ (the + terminal is grounded) to the input capacitor. With an ideal op amp the inverting input stays at 0 V, the charge $C(0-(-V_{REF}))=CV_{REF}$ placed on the input capacitor's inner plate must be balanced on the feedback capacitor, and

$$
v_{out,ideal}=-\frac{C}{C}\left(-V_{REF}\right)=+V_{REF},
$$

which is the full-scale output of this equivalent circuit.

### Step 2 — Output with finite gain

Both capacitors start discharged and the inverting-input node draws no current, so its total charge stays zero. With $v_-=-v_{out}/A$:

$$
C\left(v_--(-V_{REF})\right)+C\left(v_--v_{out}\right)=0
\;\Longrightarrow\;
2v_-+V_{REF}-v_{out}=0
\;\Longrightarrow\;
v_{out}=\frac{V_{REF}}{1+2/A}=V_{REF}\,\frac{A\beta}{1+A\beta},\quad \beta=\frac{C}{C+C}=\frac12 .
$$

The relative error is

$$
\frac{v_{out,ideal}-v_{out}}{v_{out,ideal}}=\frac{1}{1+A\beta}=\frac{1}{1+A/2}.
$$

### Step 3 — Minimum gain for ±0.5 LSB

For an 8-bit DAC, $0.5\,\mathrm{LSB}=V_{REF}/2^9=V_{REF}/512$. The error at this full-scale output must not exceed it:

$$
\frac{1}{1+A/2}\le\frac{1}{512}
\;\Longrightarrow\;
\frac A2\ge511
\;\Longrightarrow\;
A_{vd}(0)\ge1022 .
$$

The capacitive feedback factor of 1/2 doubles the gain required compared with a unity-feedback ($\beta=1$) estimate.
