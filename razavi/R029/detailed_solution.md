# Detailed solution - R029

**Approach:** $M_1$ (gate fixed at 2 V) connects $C_1$, charged to 3 V, to the empty $C_2$. Current flows from $C_1$ through $M_1$ into $C_2$, so $V_X$ falls and the source voltage $V_S$ rises, with total charge conserved. The transfer stops either when $M_1$ cuts off because $V_S$ reaches $2\ \mathrm{V}-V_{TH}$, or when $V_X$ and $V_S$ become equal first. We use the long-channel square-law model and neglect channel-length modulation ($\lambda=0$).

### Step 1 — Charge conservation

Call the source node (the top plate of $C_2$) S; the bulk is grounded, so $V_{SB}=V_S$. The current leaving $C_1$ enters $C_2$:

$$I_X=-C_1\frac{dV_X}{dt}=C_2\frac{dV_S}{dt}.$$ 

Integrating from $t=0$ gives

$$C_1(3-V_X)=C_2V_S\quad\Longrightarrow\quad V_X=3-\frac{C_2}{C_1}V_S.$$ 

With $r=C_2/C_1$, the body-effect threshold is

$$V_{TH}(V_S)=0.7+0.45\left(\sqrt{0.9+V_S}-0.9487\right)\ \mathrm{V}.$$ 

### Step 2 — Initial current

At $t=0^+$, $V_X=3$ V, $V_S=0$, $V_{GS}=2$ V, $V_{DS}=3$ V and $V_{TH}=0.7$ V. Since $V_{DS}=3\ \mathrm{V}>V_{GS}-V_{TH}=1.3\ \mathrm{V}$, $M_1$ is saturated:

$$I_X(0^+)=\tfrac12\beta(2-0.7)^2=\tfrac12\beta(1.3\ \mathrm{V})^2=(0.845\ \mathrm{V^2})\beta.$$ 

### Step 3 — Operating regions and current evolution

As charge moves, $V_{GS}=2-V_S$ falls, $V_{TH}(V_S)$ rises, and $V_{DS}=V_X-V_S$ shrinks. With $\lambda=0$,

$$I_X=\begin{cases}\tfrac12\beta(V_{GS}-V_{TH})^2,&V_{DS}\ge V_{GS}-V_{TH},\\[2pt]\beta\left[(V_{GS}-V_{TH})V_{DS}-\tfrac12V_{DS}^2\right],&0\le V_{DS}<V_{GS}-V_{TH},\end{cases}$$

for positive overdrive; the current is zero when $V_{GS}\le V_{TH}$. Thus $I_X$ decreases monotonically from $(0.845\ \mathrm{V^2})\beta$ to zero. The saturation boundary is

$$V_X-V_S\ge 2-V_S-V_{TH}\quad\Longleftrightarrow\quad V_X\ge2-V_{TH}(V_S).$$

### Step 4 — Cut-off source voltage

If $M_1$ remains saturated, cut-off occurs when $V_{GS}=V_{TH}$:

$$2-V_S=0.7+0.45\sqrt{0.9+V_S}-0.4269.$$ 

Let $u=\sqrt{0.9+V_S}$. Then

$$
\begin{aligned}
2-(u^2-0.9)&=0.2731+0.45u\\
u^2+0.45u-2.6269&=0\\
u&=\frac{-0.45+\sqrt{0.2025+10.5076}}{2}\approx1.411\\
V_{S,\mathrm{off}}&=u^2-0.9\approx1.092\ \mathrm{V}.
\end{aligned}
$$

At this point $V_{TH}\approx0.91$ V. The square-law current approaches zero asymptotically; the $1.092$ V value is therefore a limiting level.

### Step 5 — Capacitor-ratio condition

Case 1: $M_1$ cuts off while saturated. At the limiting voltage, charge conservation gives

$$V_{X,\mathrm{final}}=3-V_{S,\mathrm{off}}r.$$ 

At the boundary between the two cases, $V_X=V_S=V_{S,\mathrm{off}}$, so

$$3-rV_{S,\mathrm{off}}=V_{S,\mathrm{off}}\quad\Longrightarrow\quad r_{\mathrm{crit}}=\frac{3-V_{S,\mathrm{off}}}{V_{S,\mathrm{off}}}\approx1.748.$$ 

For $r<r_{\mathrm{crit}}$, $V_S\to1.092$ V and $V_X\to3-1.092(C_2/C_1)$ V; $V_X$ remains above $V_S$ and $M_1$ cuts off.

Case 2: For $r>r_{\mathrm{crit}}$, the nodes equalize first. $M_1$ enters triode and conducts until $V_{DS}=0$, so $V_X=V_S=V_f$. Charge conservation gives

$$C_1(3-V_f)=C_2V_f\quad\Longrightarrow\quad V_f=\frac{3C_1}{C_1+C_2}.$$ 

This value is below $1.092$ V exactly when $r>1.748$, so the transistor is still on when the nodes meet. At $r=r_{\mathrm{crit}}$, the two stopping conditions coincide at $V_X=V_S=V_{S,\mathrm{off}}$.

### Step 6 — Numerical examples

Take $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF, giving a 1 ns scale. For $C_2=C_1$ ($r=1$), $V_S\to1.092$ V and $V_X\to1.91$ V:

| $t$ (ns) | $V_X$ (V) | $V_S$ (V) | $I_X$ (mA) |
|---|---:|---:|---:|
| $0^+$ | 3.00 | 0 | 0.845 |
| 0.5 | 2.70 | 0.30 | 0.43 |
| 1 | 2.53 | 0.47 | 0.27 |
| 2 | 2.34 | 0.66 | 0.13 |
| 5 | 2.14 | 0.86 | 0.036 |
| 20 | 1.98 | 1.02 | 0.003 |
| $\infty$ | 1.91 | 1.092 | 0 |

For $C_2=3C_1$ ($r=3$), $V_f=0.75$ V. The numerical trajectory leaves saturation at about 5.0 ns ($V_X\approx1.17$ V, $V_S\approx0.61$ V) and approaches 0.75 V in triode.

## Result

### Answer figures

![V_X versus time](/q/R029/solution-vx.svg)

![I_X versus time](/q/R029/solution-ix.svg)

The curves use the stated MOS model with $\lambda=0$; the normalized examples use $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF.

$M_1$ transfers charge from $C_1$ to $C_2$, with $C_1(3-V_X)=C_2V_S$. $I_X$ starts at $(0.845\ \mathrm{V^2})\beta$ and decreases to zero while $V_X$ falls and $V_S$ rises. For $C_2/C_1<1.748$, cut-off occurs at $V_S\to1.092$ V; for $C_2/C_1>1.748$, the nodes settle at $3C_1/(C_1+C_2)$.

**Common mistake:** Treating the source as grounded and setting $V_X$ to 0 V. Node S is charged through $C_2$, so charge conservation fixes both final voltages.

**Common mistake:** Assuming only one stopping mechanism. The result depends on $C_2/C_1$ relative to $r_{\mathrm{crit}}\approx1.748$.

**Common mistake:** Drawing $I_X$ as increasing. Falling $V_{GS}$, rising $V_{TH}$ and shrinking $V_{DS}$ all reduce the current.
