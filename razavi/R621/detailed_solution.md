# Detailed solution - R621

**Approach.** Write the square-law current of one degenerated transistor, whose gate–source voltage depends on its own drain current through $R_S$. Take the total differential with respect to every quantity that can differ between the two sides ($\mu_nC_{ox}$, $W/L$, $V_{TH}$, $R_S$); $\Delta I_D$ then appears on both sides, and collecting it produces the factor $1/(1 + g_mR_S)$.

### Step 1 — The equation for one side

Both gates sit at the same bias voltage $V_b$, and with $\lambda = 0$ the drain voltages do not matter. KVL from the gate to ground gives

$$V_b = V_{GS} + I_DR_S \quad\Longrightarrow\quad V_{GS} = V_b - I_DR_S ,$$

so

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_b - I_DR_S - V_{TH}\right)^2 .$$

$I_D$ appears on both sides: the current sets the drop across $R_S$, which sets $V_{GS}$. This **negative feedback** is why degeneration helps.

### Step 2 — Mismatches and partial derivatives

Define

$$\Delta I_D = I_{D1} - I_{D2},\quad \Delta(\mu_nC_{ox}),\quad \Delta(W/L),\quad \Delta V_{TH} = V_{TH1} - V_{TH2},\quad \Delta R_S = R_{S1} - R_{S2},$$

about common nominal values; $V_b$ is shared, so $\Delta V_b = 0$. The mismatches are small, so first-order terms (the total differential) suffice. The partial derivatives of the square law are

$$
\begin{aligned}
\frac{\partial I_D}{\partial(\mu_nC_{ox})} &= \frac12\frac{W}{L}(V_{GS} - V_{TH})^2 = \frac{I_D}{\mu_nC_{ox}},\\
\frac{\partial I_D}{\partial(W/L)} &= \frac12\mu_nC_{ox}(V_{GS} - V_{TH})^2 = \frac{I_D}{W/L},\\
\frac{\partial I_D}{\partial V_{GS}} &= \mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = g_m,\\
\frac{\partial I_D}{\partial V_{TH}} &= -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = -g_m ,
\end{aligned}
$$

where $g_m$ is that of the transistor alone, not of the degenerated stage.

### Step 3 — Total differential, including the feedback through $R_S$

$$\Delta I_D = \frac{I_D}{\mu_nC_{ox}}\Delta(\mu_nC_{ox}) + \frac{I_D}{W/L}\Delta(W/L) + g_m\,\Delta V_{GS} - g_m\,\Delta V_{TH} .$$

$V_{GS} = V_b - I_DR_S$ is not independent; with $\Delta V_b = 0$ and the product rule,

$$\Delta V_{GS} = -\Delta(I_DR_S) = -R_S\,\Delta I_D - I_D\,\Delta R_S .$$

The first term is the feedback (a higher current lowers $V_{GS}$); the second is the resistor-mismatch error. Substituting:

$$\Delta I_D = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_mR_S\,\Delta I_D - g_mI_D\,\Delta R_S - g_m\,\Delta V_{TH} .$$

### Step 4 — Solve for $\Delta I_D/I_D$

Moving the $\Delta I_D$ term to the left and factoring:

$$\Delta I_D\,(1 + g_mR_S) = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_m\,\Delta V_{TH} - g_mI_D\,\Delta R_S .$$

Dividing by $I_D(1 + g_mR_S)$:

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{g_m}{I_D}\Delta V_{TH} - g_m\,\Delta R_S\right].$$

From the square law,

$$\frac{g_m}{I_D} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{\tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2} = \frac{2}{V_{GS} - V_{TH}} ,$$

so

$$\boxed{\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right]}$$

which is the required result. For $R_S = 0$ it reduces to the familiar undegenerated mismatch, $\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L) - 2\Delta V_{TH}/(V_{GS} - V_{TH})$.

### Step 5 — Cross-check with a small-signal error model

Model each mismatch as a small source acting on the nominal transistor:

- $-\Delta V_{TH}$ in series with the gate (a higher threshold acts like a lower gate voltage);
- a current $I_D[\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L)]$ from drain to source, in parallel with $g_mv_{gs}$;
- $I_D\Delta R_S$ in series with $R_S$ (the extra resistance carries the full bias current);
- the drain held at a fixed voltage ($\lambda = 0$).

<!-- diagram: diagram-01.cir -->

The voltage-source errors see the degenerated transconductance $G_m = g_m/(1 + g_mR_S)$. The current-source error is divided by the same factor: it raises the source voltage, lowering $v_{gs}$ and pulling back a fraction $g_mR_S/(1 + g_mR_S)$ of itself. Summing:

$$\Delta I_D = \frac{I_D}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L}\right] - \frac{g_m}{1 + g_mR_S}\left(\Delta V_{TH} + I_D\,\Delta R_S\right),$$

the same as Step 4.

### Step 6 — Interpretation: when does degeneration help?

**Transistor mismatches** ($\mu_nC_{ox}$, $W/L$, $V_{TH}$) are divided by $1 + g_mR_S$. A meaningful reduction needs $g_mR_S > 1$, i.e. $R_S > 1/g_m$: $g_mR_S = 1$ only halves the mismatch, while $g_mR_S = 4$ reduces it fivefold.

**The resistor term** is

$$\frac{g_m\,\Delta R_S}{1 + g_mR_S} = \frac{g_mR_S}{1 + g_mR_S}\cdot\frac{\Delta R_S}{R_S} \;\to\; \frac{\Delta R_S}{R_S}\quad\text{for } g_mR_S \gg 1 .$$

With heavy degeneration the current is set mainly by the resistor, $I_D \approx (V_b - V_{GS})/R_S$, so the current matching approaches the resistor matching. Degeneration is worthwhile only when the resistors match better than the transistors.

**Numerical illustration.** Take $V_{GS} - V_{TH} = 0.2$ V, $\Delta V_{TH} = 2$ mV and $\Delta R_S/R_S = 0.1\%$.

- Without degeneration: $2\Delta V_{TH}/(V_{GS} - V_{TH}) = 2(2\ \mathrm{mV})/(0.2\ \mathrm{V}) = 2\%$.
- With $g_mR_S = 4$: the transistor part becomes $2\%/5 = 0.4\%$, and the resistor part is $(4/5)(0.1\%) = 0.08\%$, for a worst case of about 0.5 %.

**Cost.** The resistor drops $I_DR_S = (g_mR_S)(V_{GS} - V_{TH})/2$, using $g_m = 2I_D/(V_{GS} - V_{TH})$; in the example, $4\times0.2/2 = 0.4$ V of headroom.

### Result

Taking the total differential of $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_b - I_DR_S - V_{TH})^2$, the feedback term $-g_mR_S\Delta I_D$ moves to the left-hand side and produces the factor $1 + g_mR_S$, and the term $-g_mI_D\Delta R_S$ accounts for the resistor mismatch. With $g_m/I_D = 2/(V_{GS} - V_{TH})$:

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right].$$

The transistor mismatches are suppressed by $1 + g_mR_S$, which is significant only for $R_S > 1/g_m$. The resistor term tends to $\Delta R_S/R_S$ for large $g_mR_S$, so degeneration helps only if the resistors match better than the transistors, at the price of the headroom $I_DR_S$.

**Common mistake.** Treating $V_{GS}$ as fixed when differentiating, i.e. leaving out $-R_S\Delta I_D$. Without this feedback term the factor $1/(1 + g_mR_S)$ cannot appear.

**Common mistake.** Forgetting the resistor mismatch's own contribution $-g_mI_D\Delta R_S$, or dividing by $(1 + g_mR_S)^2$. The mismatch enters $V_{GS}$ linearly, through $\Delta(I_DR_S) = R_S\Delta I_D + I_D\Delta R_S$, and the feedback divides each error term only once.

**Common mistake.** Concluding that any amount of degeneration greatly improves matching. For $g_mR_S \ll 1$ the improvement is negligible, and for $g_mR_S \gg 1$ the current mismatch is limited by $\Delta R_S/R_S$.
