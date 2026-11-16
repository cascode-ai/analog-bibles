# Detailed solution - R339

**Approach.** Replace $M_2$ by an ideal current source plus its noise current $I_{n2}$ into the output. Whatever enters the output from $M_2$ must leave through $M_1$ and $R_F$ toward the source node S and then flow down through $R_S$; this fixes the source voltage, and one more KCL equation gives $v_{out}$ in terms of the signal and the four noise sources, each referred to the input through the gain.

### Step 1 — Small-signal model

- **$M_2$:** with its gate at a fixed bias and $\lambda = 0$, it carries no signal current and has infinite output resistance; only its channel noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) remains, flowing from $V_{DD}$ into the output.
- **$M_1$:** a current source $g_{m1}(v_{in} - v_S)$ from the output to S, with its noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_F$:** from the output to S, with its Norton noise $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel, also from the output to S.
- **$R_S$:** from S to ground, in series with its Thevenin noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).

<!-- diagram: diagram-01.cir -->

### Step 2 — Current in $R_S$ and the source voltage

The only current entering the output is $I_{n2}$, and it must leave through $M_1$ and $R_F$, both of which lead to S:

$$I_{n2} = \underbrace{g_{m1}(v_{in} - v_S) + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_F} + I_{nF}}_{R_F}. \tag{1}$$

So exactly $I_{n2}$ arrives at S, and its only way out is $R_S$; KVL from S through $V_{nS}$ and $R_S$ gives

$$v_S = V_{nS} + R_SI_{n2}. \tag{2}$$

**No signal current flows in $R_S$**: for the signal alone S is at ac ground, so $R_S$ does not affect the gain.

### Step 3 — Output voltage

Multiplying (1) by $R_F$ and isolating $v_{out}$:

$$
\begin{aligned}
v_{out} - v_S &= R_F\left[I_{n2} - I_{n1} - I_{nF} - g_{m1}(v_{in} - v_S)\right]\\
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)\,v_S + R_F(I_{n2} - I_{n1} - I_{nF}).
\end{aligned}
$$

Substituting (2):

$$
\begin{aligned}
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)(V_{nS} + R_SI_{n2}) + R_FI_{n2} - R_F(I_{n1} + I_{nF})\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + \left[(1 + g_{m1}R_F)R_S + R_F\right]I_{n2} - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

The coefficient of $I_{n2}$ expands to $(1 + g_{m1}R_F)R_S + R_F = R_S + R_F + g_{m1}R_FR_S$.

### Step 4 — Gain and the path of each noise source

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_F :$$

$M_2$ cannot supply the signal current $g_{m1}v_{in}$, so it circulates through $R_F$.

- $I_{n1}$ and $I_{nF}$ flow between the output and S and close through $R_F$: $-R_F(I_{n1} + I_{nF})$.
- $V_{nS}$ moves the source, changing $M_1$'s current by $-g_{m1}V_{nS}$, which returns through $R_F$, while the output also follows S directly: $(1 + g_{m1}R_F)V_{nS}$.
- $I_{n2}$ raises S by $R_SI_{n2}$, which acts like a source noise voltage (gain $1 + g_{m1}R_F$), and the part of it flowing through $R_F$ adds the drop $R_FI_{n2}$.

### Step 5 — Referring to the input

Divide each coefficient by $|A_v| = g_{m1}R_F$ and square; the sources are uncorrelated, so the powers add:

- **$M_1$:** $\dfrac{R_F}{g_{m1}R_F} = \dfrac{1}{g_{m1}}$, so the contribution is $\dfrac{4kT\gamma g_{m1}}{g_{m1}^2} = \dfrac{4kT\gamma}{g_{m1}}$.
- **$R_F$:** also $\dfrac{1}{g_{m1}}$, so $\dfrac{4kT/R_F}{g_{m1}^2} = \dfrac{4kT}{g_{m1}^2R_F}$.
- **$R_S$:** $\dfrac{1 + g_{m1}R_F}{g_{m1}R_F}$, so $4kTR_S\dfrac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2}$.
- **$M_2$:** $\dfrac{R_S + R_F + g_{m1}R_FR_S}{g_{m1}R_F}$, so $4kT\gamma g_{m2}\dfrac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$.

Summing:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}.$$

### Step 6 — Checks

- **$R_S = 0$:** the third term vanishes and the $M_2$ term becomes $4kT\gamma g_{m2}R_F^2/(g_{m1}R_F)^2 = 4kT\gamma g_{m2}/g_{m1}^2$, so
$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + \frac{4kT\gamma g_{m2}}{g_{m1}^2},$$
the familiar result for a common-source stage loaded by $R_F$ (now to ground) and the current source $M_2$.
- **Dimensions:** $R_S$, $1/g_{m1}$, $1/(g_{m1}^2R_F)$ and $g_{m2}(\text{resistance})^2$ are all resistances, so every term is $4kT\times$ (ohms), in V²/Hz.
- **Large $g_{m1}R_F$:** the $R_S$ term tends to $4kTR_S$ and the $M_2$ term to $4kT\gamma g_{m2}(R_S + 1/g_{m1})^2$: $M_2$'s noise current develops a voltage across $R_S$ that is amplified like an input.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1+g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$$

with signal gain $A_v = -g_{m1}R_F$. No signal current flows in $R_S$, but $M_2$'s noise current does, which is why $R_S$ appears in the $M_2$ term. For $R_S = 0$ the result reduces to $4kT\gamma/g_{m1} + 4kT/(g_{m1}^2R_F) + 4kT\gamma g_{m2}/g_{m1}^2$.

**Common mistake.** Treating $M_2$ as a load that sets the gain, or as noiseless. It is an ideal current source: it carries no signal current, so the gain is $-g_{m1}R_F$, but it injects its noise current $I_{n2}$.

**Common mistake.** Writing the gain as $g_{m1}R_F/(1 + g_{m1}R_S)$, as if $R_S$ degenerated $M_1$. $M_2$ supplies no signal current, so none reaches $R_S$, and the source is an ac ground for the signal.

**Common mistake.** Keeping only $R_F$ in the coefficient of $I_{n2}$ (getting $4kT\gamma g_{m2}/g_{m1}^2$ even with $R_S \ne 0$). $I_{n2}$ flows down through $R_S$, raising the source by $R_SI_{n2}$, which is amplified by $1 + g_{m1}R_F$.
