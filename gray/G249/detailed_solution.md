# Detailed solution - G249

All three results follow from two relations: the error-current equation at the input, $i_\epsilon=i_i-fi_o$, and the Norton model of the amplifier output. Because the feedback network is ideal, it adds no loading at either port, so the basic amplifier's $z_i$ and $z_o$ appear unchanged in the equations.

### Step 1 — Closed-loop current gain

With the output port short-circuited, no current flows in $z_o$ (it has zero voltage across it), so the whole controlled current reaches the output loop, and the feedback network adds no impedance in that loop:

$$
i_o=a\,i_\epsilon=a\,(i_i-fi_o).
$$

Collecting the $i_o$ terms,

$$
i_o(1+af)=a\,i_i\quad\Rightarrow\quad\frac{i_o}{i_i}=\frac{a}{1+af}=\frac{a}{1+T}.
$$

### Step 2 — Input impedance

The feedback network connects in shunt with the input and has infinite impedance across it, so it injects the current $fi_o$ independent of the input voltage. The input voltage is then set only by the current entering the basic amplifier:

$$
v_i=z_i\,i_\epsilon .
$$

Using the gain result, $fi_o=\dfrac{af}{1+af}\,i_i$, so

$$
i_\epsilon=i_i-fi_o=i_i\left(1-\frac{T}{1+T}\right)=\frac{i_i}{1+T},
$$

$$
Z_i=\frac{v_i}{i_i}=\frac{z_i\,i_\epsilon}{i_i}=\frac{z_i}{1+T}.
$$

Shunt feedback at the input diverts most of the input current through the feedback path, so only $1/(1+T)$ of it develops voltage across $z_i$: the input impedance is lowered.

### Step 3 — Output impedance

Set the input source to zero; an ideal current source of zero value is an open circuit, so $i_i=0$. Drive the output port with a test voltage $v$ and let $i$ be the current pushed into the amplifier's output terminal. The output current that the feedback network senses, in the direction delivered to a load, is then $i_o=-i$, so

$$
i_\epsilon=0-fi_o=f\,i .
$$

KCL at the output node: the test current splits into $z_o$ and the controlled source, which pushes $a\,i_\epsilon$ out of the amplifier:

$$
i=\frac{v}{z_o}-a\,i_\epsilon=\frac{v}{z_o}-af\,i\quad\Rightarrow\quad i(1+af)=\frac{v}{z_o},
$$

$$
Z_o=\frac{v}{i}=z_o(1+T).
$$

The feedback samples the output current, so it acts to hold that current constant against an applied voltage; series sampling at the output therefore raises the output impedance by the factor $1+T$, while shunt mixing at the input lowers the input impedance by the same factor.
