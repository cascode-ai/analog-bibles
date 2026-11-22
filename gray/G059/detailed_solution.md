# Detailed solution - G059

Zero the ideal voltage-source drive, apply a test voltage $v_x$ at the collector of the T model (with $r_o$ added from emitter to collector), and see which elements can carry current.

### Step 1 — Effect of an ideal voltage-source drive

An ideal voltage source has zero internal resistance; when its value is set to zero it becomes a short circuit from the emitter to ground. Hence

$$
v_e=0 .
$$

Two consequences follow. The controlled source $g_mv_e$ at the collector carries no current, and $r_e$, now connected between two grounded nodes, carries no current either.

### Step 2 — Collector node equation

Apply $v_x$ at the collector and let $i_x$ flow into it. KCL at the collector (with $R_C$ open):

$$
i_x+g_mv_e=\frac{v_x-v_e}{r_o}
\quad\xrightarrow{\;v_e=0\;}\quad
i_x=\frac{v_x}{r_o}.
$$

### Step 3 — Output resistance

$$
R_o=\frac{v_x}{i_x}=r_o .
$$

A voltage-source drive pins the emitter, so a change of collector voltage changes the current in $r_o$ without any compensating change in the controlled source. Compare a current-source drive, where the emitter is free to move and the output resistance rises to $(\beta_0+1)(r_o+r_e)\approx\beta_0r_o$. For a finite source resistance $R_S$ the result lies between these limits.
