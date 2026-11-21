# Detailed solution - G058

Drive the collector with a test voltage $v_x$, keep the ideal current-source input (zeroed, so open), and solve the two node equations of the T model with $r_o$ added from emitter to collector.

### Step 1 — Circuit for the output-resistance test

An ideal current source has infinite internal resistance; when its value is set to zero it becomes an open circuit. The emitter node is then connected to only two elements: $r_e=\alpha_0/g_m$ to the grounded base and $r_o$ to the collector. At the collector, besides $r_o$, there is the controlled source $g_mv_e$, which in the orientation of [Fig. 2] drives current from ground into the collector node. $R_C$ is treated as an open circuit.

Apply $v_x$ to the collector and let $i_x$ be the current flowing into the collector from the test source.

### Step 2 — Node equations

KCL at the emitter node (the current arriving through $r_o$ leaves through $r_e$):

$$
\frac{v_x-v_e}{r_o}=\frac{v_e}{r_e}\quad\Rightarrow\quad v_e=v_x\,\frac{r_e}{r_o+r_e}.
$$

KCL at the collector node (the test current plus the controlled-source current both leave through $r_o$):

$$
i_x+g_mv_e=\frac{v_x-v_e}{r_o}
\quad\Rightarrow\quad
i_x=\frac{v_x-v_e}{r_o}-g_mv_e=v_e\left(\frac1{r_e}-g_m\right).
$$

The second form uses the emitter equation to replace $(v_x-v_e)/r_o$ by $v_e/r_e$.

### Step 3 — Simplify with the T-model identity

Since $r_e=\alpha_0/g_m$ and $1/\alpha_0=(\beta_0+1)/\beta_0$,

$$
\frac1{r_e}=\frac{g_m(\beta_0+1)}{\beta_0}=g_m+\frac{g_m}{\beta_0}=g_m+\frac1{r_\pi},
\qquad\text{so}\qquad i_x=\frac{v_e}{r_\pi}.
$$

The collector current change is only the base-current part of the emitter current: the emitter current $v_e/r_e$ flows through $r_e$, and the fraction $\alpha_0$ of it is returned by the controlled source.

### Step 4 — Output resistance

Combining Steps 2 and 3, and using $r_\pi/r_e=(\beta_0/g_m)/(\alpha_0/g_m)=\beta_0/\alpha_0=\beta_0+1$,

$$
R_o=\frac{v_x}{i_x}=\frac{r_\pi(r_o+r_e)}{r_e}=(\beta_0+1)(r_o+r_e)=(\beta_0+1)r_o+r_\pi\approx\beta_0r_o .
$$

The emitter is fed by an ideal current source, so its total current cannot change; a change of collector voltage can only redistribute current toward the base, and the output resistance rises from $r_o$ to about $\beta_0r_o$, the maximum attainable with emitter degeneration. For example, with $I_C=250\ \mu$A, $\beta_0=200$ and $V_A=130$ V, $r_o=V_A/I_C=520\ \mathrm{k\Omega}$ and $R_o\approx201\times520\ \mathrm{k\Omega}\approx105\ \mathrm{M\Omega}$.
