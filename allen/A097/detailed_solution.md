# Detailed solution - A097

Both transistors are diode-connected, hence saturated, and carry the same current. Equate their square-law currents, solve for $V_{REF}$ as a linear function of $V_{DD}$, differentiate, and form the normalized sensitivity.

### Step 1 — Equal currents

M1 has $V_{GS1}=V_{REF}$ and M2 has $V_{SG2}=V_{DD}-V_{REF}$; with $\lambda=0$ (and no body effect, since each source is tied to its bulk), the common current is

$$
\frac{\beta_N}{2}\big(V_{REF}-V_{TN}\big)^2=\frac{\beta_P}{2}\big(V_{DD}-V_{REF}-|V_{TP}|\big)^2 .
$$

### Step 2 — Solve for $V_{REF}$

Both overdrives are positive, so taking square roots,

$$
\sqrt{\beta_N}\big(V_{REF}-V_{TN}\big)=\sqrt{\beta_P}\big(V_{DD}-V_{REF}-|V_{TP}|\big),
$$

$$
V_{REF}=\frac{\sqrt{\beta_P}\,(V_{DD}-|V_{TP}|)+\sqrt{\beta_N}\,V_{TN}}{\sqrt{\beta_N}+\sqrt{\beta_P}} .
$$

### Step 3 — Sensitivity

$V_{REF}$ is linear in $V_{DD}$, with

$$
\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{\sqrt{\beta_P}}{\sqrt{\beta_N}+\sqrt{\beta_P}} .
$$

Therefore

$$
S_{V_{DD}}^{V_{REF}}=\frac{V_{DD}}{V_{REF}}\,\frac{\partial V_{REF}}{\partial V_{DD}}
=\frac{\sqrt{\beta_P}\,V_{DD}}{\sqrt{\beta_P}\,(V_{DD}-|V_{TP}|)+\sqrt{\beta_N}\,V_{TN}} .
$$

### Step 4 — Matched devices

Write $V_{REF}=aV_{DD}+b$ with $b=(\sqrt{\beta_N}V_{TN}-\sqrt{\beta_P}|V_{TP}|)/(\sqrt{\beta_N}+\sqrt{\beta_P})$. The sensitivity of a linear function, $S=aV_{DD}/(aV_{DD}+b)$, equals 1 exactly when $b=0$, i.e. when $\sqrt{\beta_N}V_{TN}=\sqrt{\beta_P}|V_{TP}|$. With $\beta_N=\beta_P$ and $V_{TN}=|V_{TP}|$ this holds, and

$$
V_{REF}=\frac{V_{DD}-|V_{TP}|+V_{TN}}{2}=\frac{V_{DD}}{2},\qquad
S_{V_{DD}}^{V_{REF}}=\frac{\sqrt{\beta}\,V_{DD}}{\sqrt{\beta}\,(V_{DD}-V_T)+\sqrt{\beta}\,V_T}=1 .
$$

The active divider then behaves like a resistive divider: a 10% change in $V_{DD}$ changes $V_{REF}$ by 10%. For unmatched devices $S$ differs from 1, approaching 1 only when $V_{DD}\gg V_T$.
