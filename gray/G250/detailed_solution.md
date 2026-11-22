# Detailed solution - G250

All three results follow from the error-voltage equation at the input, $v_\epsilon=v_i-fi_o$, and the Norton model of the amplifier output. The ideal feedback network adds zero impedance in both the input and the output loops, so the basic amplifier's $z_i$ and $z_o$ enter the equations unchanged.

### Step 1 — Closed-loop transconductance

With the output port short-circuited, $z_o$ has no voltage across it and carries no current, so the whole controlled current flows as the output current:

$$
i_o=a\,v_\epsilon=a\,(v_i-fi_o)\quad\Rightarrow\quad i_o(1+af)=a\,v_i\quad\Rightarrow\quad\frac{i_o}{v_i}=\frac{a}{1+af}=\frac{a}{1+T}.
$$

### Step 2 — Input impedance

The feedback voltage $fi_o$ is in series with the input loop, so the same input current $i_i$ flows through the source, the feedback network and $z_i$. Only $v_\epsilon$ appears across $z_i$:

$$
i_i=\frac{v_\epsilon}{z_i}.
$$

From the gain result, $fi_o=\dfrac{T}{1+T}\,v_i$, so

$$
v_\epsilon=v_i-fi_o=\frac{v_i}{1+T},\qquad i_i=\frac{v_i}{z_i(1+T)},\qquad Z_i=\frac{v_i}{i_i}=z_i(1+T).
$$

The fed-back voltage opposes the input, so only a fraction $1/(1+T)$ of $v_i$ drives current into $z_i$: series mixing raises the input impedance.

### Step 3 — Output impedance

Set the input source to zero; an ideal voltage source of zero value is a short circuit, so $v_i=0$. Apply a test voltage $v$ at the output and let $i$ be the current pushed into the amplifier's output terminal. The sensed output current, in the direction delivered to a load, is $i_o=-i$, so

$$
v_\epsilon=0-fi_o=f\,i .
$$

KCL at the output: the test current flows into $z_o$ and against the controlled source, which pushes $a\,v_\epsilon$ out of the amplifier:

$$
i=\frac{v}{z_o}-a\,v_\epsilon=\frac{v}{z_o}-af\,i\quad\Rightarrow\quad i(1+af)=\frac{v}{z_o},\qquad Z_o=\frac{v}{i}=z_o(1+T).
$$

Sampling the output current makes the loop resist changes in that current, so the output impedance rises by $1+T$. With series connections at both ports, both impedances are multiplied by $1+T$.
