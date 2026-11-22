# Detailed solution - A527

A comparator must swing fully for an input only half an LSB from its threshold, even when the common-mode term pushes the output the wrong way. Refer both requirements to the input, add them, and find the largest $N$ whose half-LSB still covers them.

### Step 1 — Requirement for a correct decision

With $V_{OS}=0$ and $A_{cm}=1$,

$$
v_o=1000\,v_{id}+A_{cm}v_{cm},\qquad 0\le v_o\le5\ \mathrm V .
$$

For an input $0.5$ LSB above the threshold, $v_{id}=+0.5$ LSB and $v_o$ must reach 5 V. In the worst case the common-mode term opposes the decision with its largest magnitude, $A_{cm}v_{cm,max}=(1)(4\ \mathrm V)=4$ V, since $v_{cm}$ follows the input range of 1 to 4 V:

$$
1000\,(0.5\ \text{LSB})-4\ \mathrm V\ge5\ \mathrm V .
$$

The same bound follows for an input $0.5$ LSB below a threshold, which must drive the output to 0 V against a 4-V common-mode term of the opposite sense.

### Step 2 — Input-referred budget

Dividing by the gain of 1000:

$$
0.5\ \text{LSB}\ge\frac{5\ \mathrm V}{1000}+\frac{4\ \mathrm V}{1000}=5\ \mathrm{mV}+4\ \mathrm{mV}=9\ \mathrm{mV}
\;\Longrightarrow\;
1\ \text{LSB}\ge18\ \mathrm{mV}.
$$

The first term is the overdrive needed for a full 5-V swing; the second is the common-mode error referred to the input.

### Step 3 — Number of bits

With the 3-V input range,

$$
\frac{3\ \mathrm V}{2^N}\ge18\ \mathrm{mV}
\;\Longrightarrow\;
2^N\le166.7
\;\Longrightarrow\;
N=7 .
$$

At 7 bits, 1 LSB $=3\ \mathrm V/128=23.4$ mV satisfies the bound; at 8 bits, $11.7$ mV would not.
