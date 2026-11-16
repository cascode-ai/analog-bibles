# Detailed solution - R341

**Approach.** $M_1$ is a source-degenerated common-source device, and $M_2$ is a current source in parallel with $R_D$ whose gate is driven by the source node S of $M_1$. KCL at S gives $v_S$, and KCL at the output gives $v_{out}$ in terms of the signal and the four noise sources ($M_1$, $M_2$, $R_S$, $R_D$). Each noise coefficient is divided by the signal gain, and the uncorrelated powers add.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_{m1}(v_{in} - v_S)$ from the output to S, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_S$:** from S to ground, with its Norton noise $I_{nS}$ ($\overline{I_{nS}^2} = 4kT/R_S$) flowing from S to ground.
- **$M_2$** (source at ac ground, gate at S, $\lambda = 0$): it delivers $g_{m2}v_{sg2} = g_{m2}(0 - v_S) = -g_{m2}v_S$ into the output, and its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) also flows into the output. Its gate draws no current from S.
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.

<!-- diagram: diagram-01.cir -->

When $v_{in}$ rises, $v_S$ follows and turns $M_2$ *down*, so $M_2$ pulls the output in the same direction as $M_1$ and boosts the gain.

### Step 2 — KCL at the source node S

The current arriving through $M_1$ leaves through $R_S$ and its noise source:

$$g_{m1}(v_{in} - v_S) + I_{n1} = \frac{v_S}{R_S} + I_{nS}. \tag{1}$$

$$
\begin{aligned}
v_S\left(g_{m1} + \frac{1}{R_S}\right) &= g_{m1}v_{in} + I_{n1} - I_{nS}\\
v_S &= \frac{g_{m1}v_{in} + I_{n1} - I_{nS}}{g_{m1} + 1/R_S}.
\end{aligned}
\tag{2}
$$

### Step 3 — KCL at the output

The current entering the output from $R_D$ (with its noise) and from $M_2$ leaves through $M_1$:

$$\frac{0 - v_{out}}{R_D} + I_{nD} + \left(-g_{m2}v_S + I_{n2}\right) = g_{m1}(v_{in} - v_S) + I_{n1}.$$

By (1), the right-hand side equals $v_S/R_S + I_{nS}$, so

$$
\begin{aligned}
-\frac{v_{out}}{R_D} &= \frac{v_S}{R_S} + I_{nS} + g_{m2}v_S - I_{nD} - I_{n2}\\
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \left(g_{m2} + \frac{1}{R_S}\right)v_S\right].
\end{aligned}
$$

To insert (2), define

$$\rho \equiv \frac{g_{m2} + 1/R_S}{g_{m1} + 1/R_S} = \frac{1 + g_{m2}R_S}{1 + g_{m1}R_S},$$

so that $\left(g_{m2} + 1/R_S\right)v_S = \rho\left(g_{m1}v_{in} + I_{n1} - I_{nS}\right)$ and

$$
\begin{aligned}
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \rho g_{m1}v_{in} - \rho I_{n1} + \rho I_{nS}\right]\\
&= -\rho g_{m1}R_D\,v_{in} - \rho R_D\,I_{n1} + (\rho - 1)R_D\,I_{nS} + R_D\,(I_{n2} + I_{nD}).
\end{aligned}
$$

### Step 4 — Signal gain

$$A_v = \frac{v_{out}}{v_{in}} = -\rho\,g_{m1}R_D = -g_{m1}R_D\,\frac{1 + g_{m2}R_S}{1 + g_{m1}R_S}.$$

For $g_{m2} = 0$ this is the degenerated gain $g_{m1}R_D/(1 + g_{m1}R_S)$; $M_2$ multiplies it by $1 + g_{m2}R_S$, and for $g_{m2} = g_{m1}$ the degeneration is cancelled completely, $A_v = -g_{m1}R_D$.

### Step 5 — Referring each noise source to the input

Divide each coefficient by $|A_v| = \rho g_{m1}R_D$:

- **$M_1$:** $\dfrac{\rho R_D}{\rho g_{m1}R_D} = \dfrac{1}{g_{m1}}$, so
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$
- **$R_S$:** coefficient $(\rho - 1)R_D$, with
$$\rho - 1 = \frac{(1 + g_{m2}R_S) - (1 + g_{m1}R_S)}{1 + g_{m1}R_S} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S},$$
so
$$\frac{(\rho - 1)R_D}{\rho g_{m1}R_D} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S}\cdot\frac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)} = \frac{(g_{m2} - g_{m1})R_S}{g_{m1}(1 + g_{m2}R_S)}.$$
Squaring and multiplying by $4kT/R_S$:
$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{(g_{m1} - g_{m2})^2R_S^2}{g_{m1}^2(1 + g_{m2}R_S)^2}\cdot\frac{4kT}{R_S} = \frac{4kTR_S\,(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$
- **$M_2$ and $R_D$:** both are injected straight into the output, with coefficient $R_D$. Referred: $\dfrac{R_D}{\rho g_{m1}R_D} = \dfrac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)}$, so
$$\overline{V_{n,in}^2}\Big|_{M_2,R_D} = \left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right)\frac{(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

### Step 6 — Total and checks

Adding the uncorrelated contributions:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2} + \frac{4kT\left(\gamma g_{m2} + 1/R_D\right)(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

**Check, $g_{m2} = 0$:** the middle term becomes $4kTR_Sg_{m1}^2/g_{m1}^2 = 4kTR_S$ and the last $4kT(1 + g_{m1}R_S)^2/(g_{m1}^2R_D)$, giving the degenerated common-source result

$$4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1 + g_{m1}R_S)^2}{g_{m1}^2R_D}\right].$$

The $R_S$ noise partly cancels because a change $\Delta v_S$ changes $M_1$'s current by $-g_{m1}\Delta v_S$ and $M_2$'s by $-g_{m2}\Delta v_S$, and $R_D$ sees only their difference; for $g_{m2} = g_{m1}$ the noise of $R_S$ disappears from the output.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1}-g_{m2})^2}{g_{m1}^2(1+g_{m2}R_S)^2} + \frac{4kT(\gamma g_{m2} + 1/R_D)(1+g_{m1}R_S)^2}{g_{m1}^2(1+g_{m2}R_S)^2}$$

with gain $A_v = -g_{m1}R_D\,\dfrac{1 + g_{m2}R_S}{1 + g_{m1}R_S}$; $M_2$ boosts the degenerated gain. The three terms are from $M_1$, $R_S$, and $M_2$ together with $R_D$.

**Common mistake.** Reading $M_2$'s gate as tied to the output or to a fixed bias. It is connected to the source of $M_1$, so $M_2$ is controlled by $v_S$, which raises the gain by $1 + g_{m2}R_S$ and creates the $(g_{m1} - g_{m2})$ cancellation in the $R_S$ term.

**Common mistake.** Writing the $R_S$ term as $4kTR_S$, as in a plain degenerated stage. Here the source-voltage noise drives *both* $M_1$ and $M_2$, and their current changes partly cancel at the output.

**Common mistake.** Referring the $M_2$ and $R_D$ noise with the gain $g_{m1}R_D/(1 + g_{m1}R_S)$, ignoring $M_2$. Both inject noise straight into the output and must be divided by the actual gain, including the factor $1 + g_{m2}R_S$.
