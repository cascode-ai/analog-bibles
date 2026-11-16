# Detailed solution - R339

**Approach.** Replace the PMOS current source $M_2$ by an ideal (infinite-impedance) current source plus its noise current $I_{n2}$ injected into the output. Then use KCL twice. At the output: whatever enters from $M_2$ must leave through $M_1$ and $R_F$ toward the source node S. At S: the same current must flow down through $R_S$. This fixes the source voltage, and one more KCL equation gives $v_{out}$ in terms of the signal and the four noise sources. Each term is referred to the input by dividing by the gain.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$), the output (drain of $M_1$), and the source node S.

- **$M_2$** (gate at a fixed bias, source at $V_{DD}$, $\lambda = 0$): its small-signal current is zero because $v_{sg2} = 0$, and it has infinite output resistance. All that remains is its channel noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$), flowing from $V_{DD}$ into the output.
- **$M_1$**: a current source $g_{m1}(v_{in} - v_S)$ from the output to S, with its noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_F$**: from the output to S, with its Norton noise $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel, also from the output to S.
- **$R_S$**: from S to ground, in series with its Thevenin noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Current in $R_S$ and the source voltage

**KCL at the output.** The only current entering the output node is $I_{n2}$ (the signal current of $M_2$ is zero). It must leave through $M_1$ and $R_F$, both of which lead to S:

$$I_{n2} = \underbrace{g_{m1}(v_{in} - v_S) + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_F} + I_{nF}}_{R_F}. \tag{1}$$

**KCL at S.** The current arriving at S through $M_1$ and $R_F$ is therefore exactly $I_{n2}$, and the only way out is through $R_S$. So $R_S$ carries $I_{n2}$, and KVL from S to ground through $V_{nS}$ and $R_S$ gives

$$v_S = V_{nS} + R_SI_{n2}. \tag{2}$$

Note that **no signal current flows in $R_S$**: for the signal alone, S is at ac ground. $R_S$ therefore has no effect on the gain.

### Step 3 — Output voltage

Solve (1) for $v_{out}$. Multiply by $R_F$ and isolate $v_{out}$:

$$
\begin{aligned}
v_{out} - v_S &= R_F\left[I_{n2} - I_{n1} - I_{nF} - g_{m1}(v_{in} - v_S)\right]\\
v_{out} &= v_S + R_F(I_{n2} - I_{n1} - I_{nF}) - g_{m1}R_Fv_{in} + g_{m1}R_Fv_S\\
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)\,v_S + R_F(I_{n2} - I_{n1} - I_{nF}).
\end{aligned}
$$

Substitute (2):

$$
\begin{aligned}
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)(V_{nS} + R_SI_{n2}) + R_FI_{n2} - R_F(I_{n1} + I_{nF})\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + \left[(1 + g_{m1}R_F)R_S + R_F\right]I_{n2} - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

The coefficient of $I_{n2}$ can be expanded as $(1 + g_{m1}R_F)R_S + R_F = R_S + R_F + g_{m1}R_FR_S$.

### Step 4 — Gain and the path of each noise source

**Signal gain:**

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_F .$$

The signal current $g_{m1}v_{in}$ of $M_1$ cannot be supplied by the ideal current source $M_2$, so it circulates through $R_F$, giving $v_{out} = -g_{m1}R_Fv_{in}$.

**Physical paths of the noise:**

- $I_{n1}$ and $I_{nF}$ flow between the output and S and close through $R_F$: output $-R_F(I_{n1} + I_{nF})$.
- $V_{nS}$ moves the source. That changes $M_1$'s current by $-g_{m1}V_{nS}$, which has to return through $R_F$, and the output also follows S directly: total $(1 + g_{m1}R_F)V_{nS}$.
- $I_{n2}$ has no way out except through $M_1$/$R_F$ and then $R_S$. It raises S by $R_SI_{n2}$, which acts like a source noise voltage (gain $1 + g_{m1}R_F$). In addition, the part of $I_{n2}$ that passes through $R_F$ produces a drop $R_FI_{n2}$ across it.

### Step 5 — Referring to the input

Divide each coefficient by $|A_v| = g_{m1}R_F$ and square (the sources are uncorrelated, so the powers add):

- **$M_1$:** $\dfrac{R_F}{g_{m1}R_F} = \dfrac{1}{g_{m1}}$, so the contribution is $\dfrac{4kT\gamma g_{m1}}{g_{m1}^2} = \dfrac{4kT\gamma}{g_{m1}}$.
- **$R_F$:** also $\dfrac{1}{g_{m1}}$, so $\dfrac{4kT/R_F}{g_{m1}^2} = \dfrac{4kT}{g_{m1}^2R_F}$.
- **$R_S$:** $\dfrac{1 + g_{m1}R_F}{g_{m1}R_F}$, so $4kTR_S\dfrac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2}$.
- **$M_2$:** $\dfrac{R_S + R_F + g_{m1}R_FR_S}{g_{m1}R_F}$, so $4kT\gamma g_{m2}\dfrac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$.

Summing:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}.$$

### Step 6 — Checks

- **$R_S = 0$** (source grounded): the third term vanishes and the $M_2$ term becomes $4kT\gamma g_{m2}R_F^2/(g_{m1}R_F)^2 = 4kT\gamma g_{m2}/g_{m1}^2$. Then
$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + \frac{4kT\gamma g_{m2}}{g_{m1}^2},$$
the familiar result for a common-source stage loaded by $R_F$ (now from the output to ground) in parallel with the current source $M_2$.
- **Dimensions:** $R_S$, $1/g_{m1}$ and $1/(g_{m1}^2R_F)$ are resistances, and $g_{m2}(\text{resistance})^2$ is also a resistance, so every term is $4kT\times$ (ohms), in V²/Hz.
- **Large $g_{m1}R_F$:** the $R_S$ term tends to $4kTR_S$ and the $M_2$ term tends to $4kT\gamma g_{m2}(R_S + 1/g_{m1})^2$. The degeneration-like resistor $R_S$ increases the referred noise of the current source, because $M_2$'s noise current develops a voltage across $R_S$ that is then amplified like an input.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1+g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$$

with signal gain $A_v = -g_{m1}R_F$. No signal current flows in $R_S$, but $M_2$'s noise current does, which is why $R_S$ appears in the $M_2$ term. For $R_S = 0$ the result reduces to $4kT\gamma/g_{m1} + 4kT/(g_{m1}^2R_F) + 4kT\gamma g_{m2}/g_{m1}^2$.

**Common mistake.** Treating $M_2$ as a load that sets the gain (for example a resistance to ground), or as noiseless. With its gate at a fixed bias and $\lambda = 0$, $M_2$ is an ideal current source: it carries no signal current, so the gain is $-g_{m1}R_F$, but it injects its noise current $I_{n2}$, which has to flow through the rest of the circuit.

**Common mistake.** Writing the gain as $g_{m1}R_F/(1 + g_{m1}R_S)$, as if $R_S$ degenerated $M_1$. Since the output node has no ac path to ground other than through $M_1$/$R_F$ and then $R_S$, and $M_2$ supplies no signal current, no signal current reaches $R_S$; the source is an ac ground for the signal.

**Common mistake.** Keeping only $R_F$ in the coefficient of $I_{n2}$ (getting $4kT\gamma g_{m2}/g_{m1}^2$ even with $R_S \ne 0$). $I_{n2}$ must flow down through $R_S$, raising the source by $R_SI_{n2}$, and that voltage is amplified by $1 + g_{m1}R_F$, adding the $R_S$-dependent part $R_S(1 + g_{m1}R_F)$.
