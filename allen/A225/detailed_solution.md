# Detailed solution - A225

For each circuit find the input that pushes the output highest, then use the fact that the two series transistors of an unloaded follower carry the same current. Either both conduct and their square-law currents are equated, or one is cut off and the other must settle at zero current. Channel-length modulation is neglected in this large-signal calculation; $\beta_N=K'_N(W/L)=2\beta_P$.

### Step 1 — n-channel followers (Circuits 1, 3, 5)

An n-channel follower's output rises with $v_{in}$, so take $v_{in}=V_{DD}$. M1 then has $V_{GS1}=V_{DD}-v_o$ and $V_{DS1}=V_{DD}-v_o\ge V_{GS1}-V_T$, so it is saturated and the output stays at least $V_T$ below $V_{DD}$.

- **Circuit 1** (n-channel diode M2 to ground, $V_{GS2}=v_o$): equal currents in identical devices require equal gate–source voltages, $V_{DD}-v_o=v_o$, so $v_o(\max)=V_{DD}/2$.
- **Circuit 3** (p-channel M2 with source at the output and gate and drain at ground, $V_{SG2}=v_o$):
$$
\frac{\beta_N}{2}(V_{DD}-v_o-V_T)^2=\frac{\beta_P}{2}(v_o-V_T)^2
\;\Rightarrow\;\sqrt2\,(V_{DD}-v_o-V_T)=v_o-V_T,
$$
$$
v_o(\max)=\frac{\sqrt2\,V_{DD}-(\sqrt2-1)V_T}{1+\sqrt2}\approx0.586V_{DD}-0.172V_T .
$$
- **Circuit 5** (n-channel sink M2 carrying $I$): M1 must carry $I$, so $V_{GS1}=V_T+\sqrt{2I/\beta_N}$ and $v_o(\max)=V_{DD}-V_T-\sqrt{2I/\beta_N}$.

### Step 2 — p-channel followers (Circuits 2, 4, 6)

A p-channel follower's output rises as $v_{in}$ rises, and for $v_{in}$ near $V_{DD}$ the follower turns off ($V_{SG}=v_o-v_{in}<V_T$). The unloaded output then has no path for current, so the pull-up device must come to zero current:

- **Circuit 2** (p-channel diode M2 from $V_{DD}$, $V_{SG2}=V_{DD}-v_o$): its current vanishes when $V_{SG2}=V_T$, so $v_o(\max)=V_{DD}-V_T$.
- **Circuit 4** (n-channel M2 with gate and drain at $V_{DD}$, source at the output, $V_{GS2}=V_{DD}-v_o$): likewise $v_o(\max)=V_{DD}-V_T$.
- **Circuit 6** (p-channel current source M1 with gate at $V_{BP}$; the follower is M2): M1 has a fixed $V_{SG1}=V_{DD}-V_{BP}>V_T$, so it stays on. Its current can only reach zero with $V_{SD1}=0$ (deep triode), so $v_o(\max)=V_{DD}$.

### Step 3 — Circuits 3 and 5 lie above $V_{DD}/2$

Circuit 3 exceeds Circuit 1 whenever $V_{DD}>2V_T$:

$$
v_{o3}-\frac{V_{DD}}2=\frac{2\sqrt2\,V_{DD}-2(\sqrt2-1)V_T-(1+\sqrt2)V_{DD}}{2(1+\sqrt2)}
=\frac{(\sqrt2-1)(V_{DD}-2V_T)}{2(1+\sqrt2)}>0 .
$$

For Circuit 5 the overdrive $\sqrt{2I/\beta_N}$ is bounded because the common current $I$ must be reachable in every circuit with both devices saturated. The tightest bound comes from Circuit 2: its current is largest at $v_{in}=0$, where the identical p-channel devices split the supply equally ($V_{SG1}=V_{SG2}=V_{DD}/2$), so

$$
I\le\frac{\beta_P}{2}\Big(\frac{V_{DD}}2-V_T\Big)^2
\;\Rightarrow\;
\sqrt{\frac{2I}{\beta_N}}=\frac{1}{\sqrt2}\sqrt{\frac{2I}{\beta_P}}\le\frac{1}{\sqrt2}\Big(\frac{V_{DD}}2-V_T\Big).
$$

Then

$$
v_{o5}-\frac{V_{DD}}2\ge\Big(\frac{V_{DD}}2-V_T\Big)\Big(1-\frac1{\sqrt2}\Big)>0 .
$$

(Circuit 1's own bound, $\sqrt{2I/\beta_N}\le V_{DD}/2-V_T$, already gives $v_{o5}\ge V_{DD}/2$.)

### Step 4 — Lowest $v_o(\max)$: Circuit 1

| Circuit | $v_o(\max)$ |
|---|---|
| 1 | $V_{DD}/2$ |
| 3 | $\approx0.586V_{DD}-0.172V_T>V_{DD}/2$ |
| 5 | $V_{DD}-V_T-\sqrt{2I/\beta_N}>V_{DD}/2$ |
| 2, 4 | $V_{DD}-V_T$ |
| 6 | $V_{DD}$ |

Hence **Circuit 1** alone has the lowest $v_o(\max)=V_{DD}/2$: its follower and its identical diode load share the supply equally. This result does not depend on channel-length modulation, because the two devices also have equal drain–source voltages ($V_{DS1}=V_{DD}-v_o$, $V_{DS2}=v_o$). Finite $\lambda$ could pull Circuit 5 below $V_{DD}/2$ only if $V_{BN}>V_{DD}/2$, which together with the Circuit 2 current bound requires $\lambda_N\ge1/(2V_T)$, about $0.7\ \mathrm{V^{-1}}$ for $V_T=0.7$ V, far beyond any real device.
