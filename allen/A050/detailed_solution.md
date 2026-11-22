# Detailed solution - A050

Evaluate which of the two step functions is on in each range of $v_{DS}$, simplify the model piecewise, and locate the boundary where one term turns off; then repeat with $v_{GD}$ held constant. Take $V_{TS}=V_{TD}=V_T>0$ and $\beta=K'W/L$.

### Step 1 — Rewrite the model in terms of $v_{DS}$

The drain-side gate voltage is $v_{GD}=v_{GS}-v_{DS}$. The model is the difference of a source-end term and a drain-end term:

$$
i_D=\frac\beta2\Big\{(v_{GS}-V_T)^2u(v_{GS}-V_T)-(v_{GD}-V_T)^2u(v_{GD}-V_T)\Big\}.
$$

Each term is present only when the channel is inverted at that end (gate-to-end voltage above $V_T$). When both ends are inverted, the channel is continuous (nonsaturated); when only one end is inverted, the channel is pinched off at the other end, and the current no longer depends on the voltage there (saturated, with $\lambda=0$).

### Step 2 — Constant $v_{GS}=V_{GS}>V_T$

The source term is always on. The drain term is on when $v_{GD}=V_{GS}-v_{DS}>V_T$, that is, for $v_{DS}<V_{GS}-V_T$:

$$
\begin{aligned}
v_{DS}<V_{GS}-V_T:&\quad i_D=\frac\beta2\big[(V_{GS}-V_T)^2-(V_{GS}-V_T-v_{DS})^2\big]=\beta\Big[(V_{GS}-V_T)v_{DS}-\frac{v_{DS}^2}{2}\Big],\\
v_{DS}\ge V_{GS}-V_T:&\quad i_D=\frac\beta2(V_{GS}-V_T)^2 .
\end{aligned}
$$

- **Saturated region**, $v_{DS}\ge V_{GS}-V_T$: a flat line; the channel is pinched off at the drain end.
- **Nonsaturated region**, every $v_{DS}<V_{GS}-V_T$, positive and negative: one downward parabola through the origin with slope $\beta(V_{GS}-V_T)$ there. Its derivative $\beta(V_{GS}-V_T-v_{DS})$ vanishes exactly at $v_{DS}=V_{GS}-V_T$, so it meets the flat line smoothly at its maximum.
- For $v_{DS}<0$ the same parabola continues into the third quadrant: $i_D<0$ and $|i_D|$ grows quadratically without limit. The drain is now the more negative terminal and acts as the source, and its gate drive $v_{GD}=V_{GS}+|v_{DS}|$ keeps increasing while $v_{GS}$ is held fixed, so this branch never saturates.

![iD versus vDS at constant vGS: a parabola through the origin for vDS below Vov, continuing to large negative current for negative vDS, and flat saturation at 0.5 beta Vov squared above vDS = Vov](/q/A050/solution-curves.svg)

The axes are normalized with $V_{ov}=V_{GS}-V_T$: $v_{DS}/V_{ov}$ and $i_D/(\beta V_{ov}^2)$, so the saturated level is $0.5$ and the boundary is at $v_{DS}/V_{ov}=1$.

### Step 3 — Constant $v_{GD}=V_{GD}>V_T$

Now the drain term is always on, and $v_{GS}=V_{GD}+v_{DS}$. The source term is on when $V_{GD}+v_{DS}>V_T$, that is, for $v_{DS}>-(V_{GD}-V_T)$:

$$
\begin{aligned}
v_{DS}>-(V_{GD}-V_T):&\quad i_D=\frac\beta2\big[(V_{GD}-V_T+v_{DS})^2-(V_{GD}-V_T)^2\big]=\beta\Big[(V_{GD}-V_T)v_{DS}+\frac{v_{DS}^2}{2}\Big],\\
v_{DS}\le-(V_{GD}-V_T):&\quad i_D=-\frac\beta2(V_{GD}-V_T)^2 .
\end{aligned}
$$

- **Saturated region**, $v_{DS}\le-(V_{GD}-V_T)$: a flat line at a negative current; source and drain have exchanged roles and the channel is pinched off at the source end.
- **Nonsaturated region**, $v_{DS}>-(V_{GD}-V_T)$: an upward parabola through the origin with slope $\beta(V_{GD}-V_T)$, joining the flat line with zero slope at the boundary and growing quadratically, without saturating, for $v_{DS}>0$.

![iD versus vDS at constant vGD: flat negative saturation at −0.5 beta Vov squared for vDS below −Vov and a rising parabola through the origin above it](/q/A050/solution-curves-vgd.svg)

Here $V_{ov}=V_{GD}-V_T$. Replacing $v_{DS}\to-v_{DS}$ and $i_D\to-i_D$ turns the Step 3 expressions into those of Step 2, so the second sketch is the first rotated by 180° about the origin. This point symmetry is the source–drain symmetry built into the model: exchanging the two terminals changes only the sign of the current.

If $V_{TS}\ne V_{TD}$, the shapes are the same, but $i_D\ne0$ at $v_{DS}=0$ and the region boundaries become $v_{DS}=v_{GS}-V_{TD}$ (constant $v_{GS}$) and $v_{DS}=V_{TS}-v_{GD}$ (constant $v_{GD}$).
