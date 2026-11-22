# Detailed solution - A065

Write the square-law current of each device in terms of its own source and drain node voltages, in a form that is a difference of one function evaluated at the two ends. Because the same current flows through all devices in series, summing the equations makes the internal node voltages cancel, leaving the equation of one transistor.

### Step 1 — One device in "difference" form

Ignore the body effect, so every device has the same $V_T$; all gates are at $V_G$. Label the node voltages $V_0=V_S$ (source of M1), $V_1,\dots,V_{n-1}$ (internal nodes) and $V_n=V_D$ (drain of M$n$); device $i$ has its source at $V_{i-1}$ and its drain at $V_i$. Its nonsaturation current,

$$
i_D=\frac{K'W}{L_i}\Big[(V_G-V_{i-1}-V_T)(V_i-V_{i-1})-\tfrac12(V_i-V_{i-1})^2\Big],
$$

can be rewritten (expand the squares) as

$$
i_D=\frac{K'W}{2L_i}\Big[F(V_{i-1})-F(V_i)\Big],\qquad F(V)=(V_G-V_T-V)^2,
$$

that is, $\dfrac{2L_i}{K'W}\,i_D=F(V_{i-1})-F(V_i)$. This form is the integral of the channel charge, $\int_{V_{i-1}}^{V_i}(V_G-V_T-V)\,dV$, between the two ends of the device.

### Step 2 — Sum over the series stack

The devices are in series, so the same $i_D$ flows through each. Adding the $n$ equations, the internal node terms cancel in pairs (telescoping sum):

$$
\frac{2}{K'W}\Big(\sum_{i=1}^{n}L_i\Big)i_D=F(V_0)-F(V_n)=F(V_S)-F(V_D).
$$

Hence

$$
i_D=\frac{K'W}{2\sum L_i}\Big[(V_G-V_S-V_T)^2-(V_G-V_D-V_T)^2\Big],
$$

which is the nonsaturation equation of a single transistor of width $W$ and length $\sum L_i$, connected between the outer source $V_S$ and the outer drain $V_D$.

### Step 3 — Saturation and cutoff

The lower devices cannot saturate while the stack conducts: device $i<n$ has $V_{GS,i}-V_T=V_G-V_{i-1}-V_T$ and $V_{DS,i}=V_i-V_{i-1}$, and since device $i+1$ conducts, $V_G-V_i>V_T$, so $V_{DS,i}<V_{GS,i}-V_T$. Only the top device M$n$ can saturate, when $V_G-V_D\le V_T$. Its channel is then pinched off at the drain end, and the drain-end term is replaced by zero, $F(V_n)\to0$. The same telescoping sum gives

$$
i_D=\frac{K'W}{2\sum L_i}(V_G-V_S-V_T)^2,
$$

again the single-device saturation current. If $V_G-V_S\le V_T$, M1 is off and the whole stack carries no current, as does the single device.

### Step 4 — Equivalent transistor

In every region the stack behaves as one transistor with

$$
W_{eq}=W,\qquad L_{eq}=\sum_{i=1}^{n}L_i .
$$

Physically, the channels are joined end to end, so their lengths add while the width stays the same. The result requires a common $V_T$; with body effect, the upper devices, whose sources sit above $V_S$, would have higher thresholds and the telescoping would no longer be exact.
