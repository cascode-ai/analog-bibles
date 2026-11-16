# Detailed solution - R621

**Approach.** Write the square-law current of one degenerated transistor, noting that its gate–source voltage depends on its own drain current through $R_S$. Then take the total differential with respect to every quantity that can differ between the two sides ($\mu_nC_{ox}$, $W/L$, $V_{TH}$, $R_S$). The current mismatch $\Delta I_D$ appears on both sides of the resulting equation; collecting it produces the factor $1/(1 + g_mR_S)$.

### Step 1 — The circuit and the equation for one side

Reading the figure: $M_1$ and $M_2$ have their gates tied to the same bias voltage $V_b$. The source of $M_1$ goes to ground through $R_{S1}$, and the source of $M_2$ through $R_{S2}$. The drain currents $I_{D1}$ and $I_{D2}$ are the outputs of the two current sources. With $\lambda = 0$ the drain voltages do not affect the currents.

**KVL from the gate to ground** for either side (the gate current is zero, so the whole drain current flows through the source resistor):

$$V_b = V_{GS} + I_DR_S \quad\Longrightarrow\quad V_{GS} = V_b - I_DR_S .$$

**Square-law saturation current:**

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_b - I_DR_S - V_{TH}\right)^2 .$$

$I_D$ appears on both sides: the current sets the voltage across $R_S$, which sets $V_{GS}$, which sets the current. This is **negative feedback**, and it is the reason degeneration helps.

### Step 2 — Defining the mismatches

Let every quantity on side 1 equal its nominal value plus half the mismatch, and on side 2 its nominal value minus half the mismatch:

$$\Delta I_D = I_{D1} - I_{D2},\quad \Delta(\mu_nC_{ox}),\quad \Delta(W/L),\quad \Delta V_{TH} = V_{TH1} - V_{TH2},\quad \Delta R_S = R_{S1} - R_{S2}.$$

$V_b$ is common to both sides, so $\Delta V_b = 0$. All mismatches are small, so we may linearize (keep first-order terms only), i.e. use the **total differential** of the current equation. Nominal values ($I_D$, $V_{GS}$, $R_S$, ...) are the same for both sides.

### Step 3 — Partial derivatives of the square law

Write $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$ and differentiate with respect to each variable:

$$
\begin{aligned}
\frac{\partial I_D}{\partial(\mu_nC_{ox})} &= \frac12\frac{W}{L}(V_{GS} - V_{TH})^2 = \frac{I_D}{\mu_nC_{ox}},\\
\frac{\partial I_D}{\partial(W/L)} &= \frac12\mu_nC_{ox}(V_{GS} - V_{TH})^2 = \frac{I_D}{W/L},\\
\frac{\partial I_D}{\partial V_{GS}} &= \mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = g_m,\\
\frac{\partial I_D}{\partial V_{TH}} &= -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = -g_m .
\end{aligned}
$$

Here $g_m$ is the transconductance of the transistor alone (not of the degenerated stage).

### Step 4 — Total differential, including the feedback through $R_S$

The total change of the current is the sum of the partial derivatives times the changes:

$$\Delta I_D = \frac{I_D}{\mu_nC_{ox}}\Delta(\mu_nC_{ox}) + \frac{I_D}{W/L}\Delta(W/L) + g_m\,\Delta V_{GS} - g_m\,\Delta V_{TH} .$$

$V_{GS}$ is not independent: from Step 1, $V_{GS} = V_b - I_DR_S$. Its change follows from the product rule, with $\Delta V_b = 0$:

$$\Delta V_{GS} = -\Delta(I_DR_S) = -R_S\,\Delta I_D - I_D\,\Delta R_S .$$

The first term is the **feedback**: a higher current raises the source voltage and lowers $V_{GS}$. The second term is the error caused by the resistor mismatch. Substitute:

$$\Delta I_D = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_mR_S\,\Delta I_D - g_mI_D\,\Delta R_S - g_m\,\Delta V_{TH} .$$

### Step 5 — Solve for $\Delta I_D/I_D$

Move the $\Delta I_D$ term to the left-hand side:

$$\Delta I_D + g_mR_S\,\Delta I_D = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_m\,\Delta V_{TH} - g_mI_D\,\Delta R_S .$$

Factor $\Delta I_D$:

$$\Delta I_D\,(1 + g_mR_S) = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_m\,\Delta V_{TH} - g_mI_D\,\Delta R_S .$$

Divide both sides by $I_D(1 + g_mR_S)$:

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{g_m}{I_D}\Delta V_{TH} - g_m\,\Delta R_S\right].$$

Finally, express $g_m/I_D$ through the overdrive voltage $V_{GS} - V_{TH}$:

$$\frac{g_m}{I_D} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{\tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2} = \frac{2}{V_{GS} - V_{TH}} .$$

Therefore

$$\boxed{\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right]}$$

which is the required result. For $R_S = 0$ it reduces to the familiar mismatch of an undegenerated pair, $\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L) - 2\Delta V_{TH}/(V_{GS} - V_{TH})$.

### Step 6 — Cross-check with a small-signal error model

The same result follows from a linear "error circuit" in which each mismatch is a small source acting on the nominal transistor:

- a voltage source $-\Delta V_{TH}$ in series with the gate (a higher threshold acts like a lower gate voltage);
- a current source $I_D[\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L)]$ from drain to source, in parallel with the controlled source $g_mv_{gs}$ (a stronger device conducts proportionally more current at the same $V_{GS}$);
- a voltage source $I_D\Delta R_S$ in series with $R_S$ (the extra resistance carries the full bias current);
- the drain held at a fixed voltage, since with $\lambda = 0$ it does not matter.

<!-- diagram: diagram-01.cir -->

The voltage-source errors see the transconductance of a degenerated stage, $G_m = g_m/(1 + g_mR_S)$. The current-source error is divided by the same factor $1 + g_mR_S$: the extra current raises the source voltage by $R_S$ times the current, which lowers $v_{gs}$ and pulls back a fraction $g_mR_S/(1 + g_mR_S)$ of it. Summing the three contributions:

$$\Delta I_D = \frac{I_D}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L}\right] - \frac{g_m}{1 + g_mR_S}\left(\Delta V_{TH} + I_D\,\Delta R_S\right),$$

which is the same as Step 5.

### Step 7 — Interpretation: when does degeneration help?

**Transistor mismatches** ($\mu_nC_{ox}$, $W/L$, $V_{TH}$) are all divided by $1 + g_mR_S$, the loop gain of the local feedback plus one. A meaningful reduction needs $g_mR_S > 1$, i.e. $R_S > 1/g_m$: with $g_mR_S = 1$ the mismatch is only halved, while $g_mR_S = 4$ reduces it fivefold.

**The resistor term** can be rewritten as

$$\frac{g_m\,\Delta R_S}{1 + g_mR_S} = \frac{g_mR_S}{1 + g_mR_S}\cdot\frac{\Delta R_S}{R_S} \;\to\; \frac{\Delta R_S}{R_S}\quad\text{for } g_mR_S \gg 1 .$$

With heavy degeneration the current is set mainly by the resistor, $I_D \approx (V_b - V_{GS})/R_S$, so the current matching approaches the resistor matching. Degeneration is therefore worthwhile only when the resistors match better than the transistors, as the problem statement says.

**Numerical illustration.** Take $V_{GS} - V_{TH} = 0.2$ V, $\Delta V_{TH} = 2$ mV and $\Delta R_S/R_S = 0.1\%$.

- Without degeneration: $2\Delta V_{TH}/(V_{GS} - V_{TH}) = 2(2\ \mathrm{mV})/(0.2\ \mathrm{V}) = 2\%$.
- With $g_mR_S = 4$: the transistor part becomes $2\%/5 = 0.4\%$, and the resistor part is $(4/5)(0.1\%) = 0.08\%$, for a worst case of about 0.5 %.

**Cost.** The resistor drops $I_DR_S = (g_mR_S)(V_{GS} - V_{TH})/2$, using $g_m = 2I_D/(V_{GS} - V_{TH})$. In the example this is $4\times0.2/2 = 0.4$ V of voltage headroom.

### Result

Taking the total differential of $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_b - I_DR_S - V_{TH})^2$, the term $-g_mR_S\Delta I_D$ (feedback through $R_S$) moves to the left-hand side and produces the factor $1 + g_mR_S$, and the term $-g_mI_D\Delta R_S$ accounts for the resistor mismatch. With $g_m/I_D = 2/(V_{GS} - V_{TH})$:

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right].$$

The transistor mismatches are suppressed by $1 + g_mR_S$, which is significant only for $R_S > 1/g_m$. The resistor term tends to $\Delta R_S/R_S$ for large $g_mR_S$, so degeneration helps only if the resistors match better than the transistors, at the price of the headroom $I_DR_S$.

**Common mistake.** Treating $V_{GS}$ as fixed when differentiating, i.e. leaving out the change $-R_S\Delta I_D$ in $V_{GS}$. Without this feedback term the factor $1/(1 + g_mR_S)$ cannot appear, and the result wrongly suggests that degeneration changes nothing except adding a resistor-mismatch term.

**Common mistake.** Forgetting the resistor mismatch's own contribution $-g_mI_D\Delta R_S$, or dividing by $(1 + g_mR_S)^2$. The mismatch enters $V_{GS}$ linearly, through $\Delta(I_DR_S) = R_S\Delta I_D + I_D\Delta R_S$, and the feedback divides each error term only once.

**Common mistake.** Concluding that any amount of degeneration greatly improves matching. For $g_mR_S \ll 1$ the improvement is negligible, and for $g_mR_S \gg 1$ the current mismatch is limited by the resistor mismatch $\Delta R_S/R_S$.
