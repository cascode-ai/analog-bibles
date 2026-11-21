# Detailed solution - G060

Find $g_m$ and $r_o$ from the square-law model at the given bias, then write KCL at the source of the common-gate small-signal circuit with the drain load present, because $r_o$ couples the load back to the input.

### Step 1 — Small-signal parameters

In the active (saturation) region, $I_D=\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, so

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(200\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=2\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.01\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=1\ \mathrm{M\Omega},\qquad g_mr_o=2000 .
$$

The body effect is ignored, so there is no $g_{mb}$ term.

### Step 2 — Input resistance with a drain load

The gate is at ac ground, so $v_{gs}=-v_i$, where $v_i$ is the source voltage. Apply $v_i$ and let $i_i$ flow into the source. Between source and drain it splits into two branches: the controlled source $g_mv_{gs}$ (drain to source), which with $v_{gs}=-v_i$ carries $g_mv_i$ from source to drain, and $r_o$:

$$
i_i=g_mv_i+\frac{v_i-v_o}{r_o}.
$$

The same current leaves the drain node through the load, so $v_o=i_iR_D$. Substituting,

$$
i_i\left(1+\frac{R_D}{r_o}\right)=v_i\left(g_m+\frac1{r_o}\right)
\quad\Rightarrow\quad
R_i=\frac{v_i}{i_i}=\frac{r_o+R_D}{1+g_mr_o}.
$$

For $R_D\ll r_o$ this reduces to about $1/g_m$; for $R_D$ comparable to $r_o$ the rise of $v_o$ reduces the current through $r_o$ and raises $R_i$.

### Step 3 — $R_D=10\ \mathrm{k\Omega}$

$$
R_i=\frac{1\ \mathrm{M\Omega}+10\ \mathrm{k\Omega}}{1+2000}=\frac{1.01\ \mathrm{M\Omega}}{2001}=504.7\ \Omega ,
$$

close to $1/g_m=500\ \Omega$.

### Step 4 — $R_D=1\ \mathrm{M\Omega}$ with a parallel current source

The ideal 100-µA current source supplies the dc drain current and has infinite small-signal resistance, so the small-signal load is still $R_D=1\ \mathrm{M\Omega}$:

$$
R_i=\frac{1\ \mathrm{M\Omega}+1\ \mathrm{M\Omega}}{2001}=999.5\ \Omega\approx1.0\ \mathrm{k\Omega}.
$$

The input resistance roughly doubles to about $2/g_m$ because the drain load now equals $r_o$; it would grow further, toward $R_D/(g_mr_o)$, as $R_D$ is increased beyond $r_o$.
