# Detailed solution - A368

The input common-mode range of the folded cascode is set by the input pair M1–M2 and the devices directly above and below it: the folding current sources M4/M5, whose drains hold the input drains, and the tail M3. Write each limit as the condition that keeps one of these devices saturated, then substitute the native threshold $V_{T1}=0$ and the given saturation voltages.

### Step 1 — Upper limit

The drain of M1 is a folding node. With M4 at the edge of saturation it sits at $V_{DD}-V_{SD4}(\mathrm{sat})$. M1 stays saturated while $V_{D1}\ge v_{icm}-V_{T1}$, so

$$
V_{icm}(\text{upper})=V_{DD}-V_{SD4}(\mathrm{sat})+V_{T1}=1.5-0.2+0=1.3\ \mathrm V .
$$

### Step 2 — Lower limit

The tail M3 needs $V_{DS3}\ge V_{DS3}(\mathrm{sat})$, and the input gate sits one $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$ above the common source:

$$
V_{icm}(\text{lower})=V_{DS3}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.2+0+0.2=0.4\ \mathrm V .
$$

### Step 3 — ICMR within the rails

Both limits lie inside $[0,\ 1.5]$ V, so

$$
\mathrm{ICMR}:\ 0.4\ \mathrm V\le v_{icm}\le1.3\ \mathrm V,\qquad\text{width }0.9\ \mathrm V,
$$

roughly centred in the 1.5 V supply. With standard input devices ($V_{T1}=0.5$ V) the limits would be $0.9$ V and $1.8$ V; clipped to the rails the range would be 0.9–1.5 V, only 0.6 V. The zero threshold shifts the whole range down by 0.5 V, which moves it into the middle of the supply.
