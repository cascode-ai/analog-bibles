# Detailed solution - R341

**Approach.** $M_1$ is a source-degenerated common-source device. The PMOS $M_2$ is a current source in parallel with $R_D$, but its gate is driven by the source node S of $M_1$, so it is controlled by $v_S$. KCL at S gives $v_S$; KCL at the output gives $v_{out}$ in terms of the signal and the four noise sources ($M_1$, $M_2$, $R_S$, $R_D$). Each noise coefficient is divided by the signal gain, and the uncorrelated powers are added.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$), the source node S, and the output.

- **$M_1$**: current $g_{m1}(v_{in} - v_S)$ from the output to S, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_S$**: from S to ground, with Norton noise current $I_{nS}$ ($\overline{I_{nS}^2} = 4kT/R_S$) in parallel, taken as flowing from S to ground.
- **$M_2$** (PMOS, source at $V_{DD}$ = ac ground, gate at S, drain at the output, $\lambda = 0$): it delivers into the output the current $g_{m2}v_{sg2} = g_{m2}(0 - v_S) = -g_{m2}v_S$. Its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) also flows into the output. Its gate draws no current from S.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) in parallel, taken as flowing from $V_{DD}$ into the output.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

**Intuition.** When $v_{in}$ rises, $v_S$ also rises (follower action of $M_1$ on $R_S$). The higher $v_S$ turns $M_2$ *down*, so $M_2$ supplies less current to the output. That pulls the output down in the same direction as $M_1$, so $M_2$ boosts the gain.

### Step 2 — KCL at the source node S

The current arriving through $M_1$ leaves through $R_S$ and its noise source (the gate of $M_2$ takes no current):

$$g_{m1}(v_{in} - v_S) + I_{n1} = \frac{v_S}{R_S} + I_{nS}. \tag{1}$$

Solve for $v_S$:

$$
\begin{aligned}
v_S\left(g_{m1} + \frac{1}{R_S}\right) &= g_{m1}v_{in} + I_{n1} - I_{nS}\\
v_S &= \frac{g_{m1}v_{in} + I_{n1} - I_{nS}}{g_{m1} + 1/R_S}.
\end{aligned}
\tag{2}
$$

### Step 3 — KCL at the output

Current entering the output from $R_D$ (with its noise) and from $M_2$ equals the current leaving through $M_1$:

$$\frac{0 - v_{out}}{R_D} + I_{nD} + \left(-g_{m2}v_S + I_{n2}\right) = g_{m1}(v_{in} - v_S) + I_{n1}.$$

By (1), the right-hand side equals $v_S/R_S + I_{nS}$. Substitute and solve for $v_{out}$:

$$
\begin{aligned}
-\frac{v_{out}}{R_D} &= \frac{v_S}{R_S} + I_{nS} + g_{m2}v_S - I_{nD} - I_{n2}\\
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \left(g_{m2} + \frac{1}{R_S}\right)v_S\right].
\end{aligned}
$$

Now insert (2). Define the ratio

$$\rho \equiv \frac{g_{m2} + 1/R_S}{g_{m1} + 1/R_S} = \frac{1 + g_{m2}R_S}{1 + g_{m1}R_S}$$

(multiply the numerator and denominator by $R_S$). Then $\left(g_{m2} + 1/R_S\right)v_S = \rho\left(g_{m1}v_{in} + I_{n1} - I_{nS}\right)$, and

$$
\begin{aligned}
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \rho g_{m1}v_{in} - \rho I_{n1} + \rho I_{nS}\right]\\
&= -\rho g_{m1}R_D\,v_{in} - \rho R_D\,I_{n1} + (\rho - 1)R_D\,I_{nS} + R_D\,(I_{n2} + I_{nD}).
\end{aligned}
$$

### Step 4 — Signal gain

$$A_v = \frac{v_{out}}{v_{in}} = -\rho\,g_{m1}R_D = -g_{m1}R_D\,\frac{1 + g_{m2}R_S}{1 + g_{m1}R_S}.$$

Without $M_2$ ($g_{m2} = 0$) this is the degenerated gain $g_{m1}R_D/(1 + g_{m1}R_S)$. $M_2$ multiplies it by $1 + g_{m2}R_S$; for $g_{m2} = g_{m1}$ the degeneration is cancelled completely and $A_v = -g_{m1}R_D$.

### Step 5 — Referring each noise source to the input

Divide each coefficient by $|A_v| = \rho g_{m1}R_D$:

- **$M_1$:** $\dfrac{\rho R_D}{\rho g_{m1}R_D} = \dfrac{1}{g_{m1}}$, so
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$
- **$R_S$:** coefficient $(\rho - 1)R_D$. First,
$$\rho - 1 = \frac{(1 + g_{m2}R_S) - (1 + g_{m1}R_S)}{1 + g_{m1}R_S} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S},$$
so
$$\frac{(\rho - 1)R_D}{\rho g_{m1}R_D} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S}\cdot\frac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)} = \frac{(g_{m2} - g_{m1})R_S}{g_{m1}(1 + g_{m2}R_S)}.$$
Squaring and multiplying by $4kT/R_S$:
$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{(g_{m1} - g_{m2})^2R_S^2}{g_{m1}^2(1 + g_{m2}R_S)^2}\cdot\frac{4kT}{R_S} = \frac{4kTR_S\,(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$
- **$M_2$ and $R_D$:** both have coefficient $R_D$ (they are currents injected straight into the output). Referred: $\dfrac{R_D}{\rho g_{m1}R_D} = \dfrac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)}$, so
$$\overline{V_{n,in}^2}\Big|_{M_2,R_D} = \left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right)\frac{(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

### Step 6 — Total and checks

Adding the uncorrelated contributions:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2} + \frac{4kT\left(\gamma g_{m2} + 1/R_D\right)(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

**Check, $g_{m2} = 0$** (no $M_2$): the middle term becomes $4kTR_Sg_{m1}^2/g_{m1}^2 = 4kTR_S$ and the last becomes $4kT(1 + g_{m1}R_S)^2/(g_{m1}^2R_D)$, giving the degenerated common-source result

$$4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1 + g_{m1}R_S)^2}{g_{m1}^2R_D}\right].$$

**Why the $R_S$ noise partly cancels.** $I_{nS}$ moves $v_S$. The change in $v_S$ changes $M_1$'s current by $-g_{m1}\Delta v_S$ and $M_2$'s current by $-g_{m2}\Delta v_S$. The output (through $R_D$) sees only the *difference* of these two currents. For $g_{m2} = g_{m1}$, $M_2$ supplies exactly the extra current that $M_1$ draws, and the noise of $R_S$ disappears from the output.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1}-g_{m2})^2}{g_{m1}^2(1+g_{m2}R_S)^2} + \frac{4kT(\gamma g_{m2} + 1/R_D)(1+g_{m1}R_S)^2}{g_{m1}^2(1+g_{m2}R_S)^2}$$

with gain $A_v = -g_{m1}R_D\,\dfrac{1 + g_{m2}R_S}{1 + g_{m1}R_S}$; $M_2$ boosts the degenerated gain. The three terms are from $M_1$, $R_S$, and $M_2$ together with $R_D$.

**Common mistake.** Reading $M_2$'s gate as tied to the output (a diode-connected load) or to a fixed bias. It is connected to the source of $M_1$, so $M_2$ is a current source *controlled by $v_S$*. That connection is what raises the gain by $1 + g_{m2}R_S$ and creates the $(g_{m1} - g_{m2})$ cancellation in the $R_S$ term.

**Common mistake.** Writing the $R_S$ term as $4kTR_S$, as in a plain degenerated stage. Here the source-voltage noise produced by $R_S$ drives *both* $M_1$ and $M_2$, and their current changes partly cancel at the output.

**Common mistake.** Using the gain $g_{m1}R_D/(1 + g_{m1}R_S)$ (ignoring $M_2$) when referring the $M_2$ and $R_D$ noise, or treating $R_D$ and $M_2$ as noiseless. Both inject noise currents directly into the output, and they must be divided by the actual gain, including the factor $1 + g_{m2}R_S$.
