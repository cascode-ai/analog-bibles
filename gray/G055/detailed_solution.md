# Detailed solution - G055

Write the gain with the hybrid-π model, express $g_m$, $r_\pi$ and $r_o$ in terms of $I_C$, and maximize the gain magnitude with respect to $I_C$. The gain is a product of an input divider that worsens at high current and a transconductance-times-load term whose two factors trade off against each other.

### Step 1 — Gain expression

With $r_b=0$, $R_S$ and $r_\pi$ form a divider at the base, and the collector node sees $R_C\parallel r_o$:

$$
\frac{v_o}{v_i}=-\frac{r_\pi}{R_S+r_\pi}\,g_m\,(R_C\parallel r_o)=-\frac{\beta_0\,(R_C\parallel r_o)}{R_S+r_\pi},
$$

using $g_mr_\pi=\beta_0$. Substituting $g_m=I_C/V_T$, $r_\pi=\beta_0V_T/I_C$ and $r_o=V_A/I_C$:

$$
\frac{v_o}{v_i}=-\frac{\beta_0R_CV_AI_C}{(V_A+I_CR_C)(I_CR_S+\beta_0V_T)} .
$$

### Step 2 — Optimum collector current

Write $|A_v|=\beta_0R_CV_A\,I_C/D$ with

$$
D(I_C)=(V_A+I_CR_C)(I_CR_S+\beta_0V_T)=R_CR_SI_C^2+(V_AR_S+\beta_0V_TR_C)I_C+\beta_0V_TV_A .
$$

$d(I_C/D)/dI_C=0$ requires $D=I_CD'$, i.e. $R_CR_SI_C^2+(\ldots)I_C+\beta_0V_TV_A=2R_CR_SI_C^2+(\ldots)I_C$, so

$$
R_CR_SI_C^2=\beta_0V_TV_A\quad\Rightarrow\quad I_{C,\text{opt}}=\sqrt{\frac{\beta_0V_TV_A}{R_SR_C}} .
$$

At this current $R_C/r_o=r_\pi/R_S$: the loading at the output and the attenuation at the input are balanced.

### Step 3 — Gain at the optimum

Substituting $I_{C,\text{opt}}$ (with $I_CR_C=\sqrt{\beta_0V_TV_AR_C/R_S}$ and $I_CR_S=\sqrt{\beta_0V_TV_AR_S/R_C}$) and simplifying:

$$
\left|\frac{v_o}{v_i}\right|_{\max}=\frac{\beta_0V_AR_C}{\left(\sqrt{\beta_0V_TR_C}+\sqrt{V_AR_S}\right)^2}=\frac{V_A}{V_T}\,\frac{x^2}{(1+x)^2},\qquad x=\frac{I_{C,\text{opt}}R_C}{V_A}=\sqrt{\frac{\beta_0V_TR_C}{V_AR_S}} .
$$

The gain is inverting. It never exceeds the intrinsic gain $V_A/V_T=g_mr_o$, and approaches it only when $x\gg1$.

### Step 4 — Why the gain falls at both extremes

- **Very low $I_C$**: $r_\pi\gg R_S$ and $r_o\gg R_C$, so $A_v\approx-g_mR_C=-I_CR_C/V_T$, proportional to $I_C$. The transconductance is too small.
- **Very high $I_C$**: $r_\pi=\beta_0V_T/I_C$ falls well below $R_S$, so only the fraction $r_\pi/(R_S+r_\pi)\propto1/I_C$ of $v_i$ reaches the base; the stage tends to $-\beta_0(R_C\parallel r_o)/R_S$, a current-gain limit. At the same time $r_o=V_A/I_C$ drops below $R_C$, so the load also falls as $1/I_C$. Both effects make the gain decrease.
