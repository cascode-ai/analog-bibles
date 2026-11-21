# Detailed solution - A477

Track the charge on the island formed in φ2 by the summing node, the bus and the right plates of the selected capacitors. Each selected capacitor is charged to its reference in φ1 and discharged in φ2, and its charge ends up on the feedback capacitor $C$. Then evaluate the output for $k=2$ in LSBs and read off the INL and DNL.

### Step 1 — Capacitor states in the two phases

- φ1: the left plates of the upper $C/2$ and $C/4$ are at $V_{REF}$, those of the lower $C/2$ and $C/4$ at $V_{REF}/k$; all right plates are grounded through the φ1 switches; the feedback capacitor $C$ is shorted, so $v_{OUT}=0$ and $C$ holds no charge.
- φ2: all left plates are grounded, and the bus, joined to the right plates of the capacitors whose bits are 1, is connected to the virtual ground (0 V).

A selected capacitor $C_i$ with reference $V_{ref,i}$ therefore goes from $V_{ref,i}$ across it to 0 V.

### Step 2 — Charge conservation and $v_{OUT}$

The island (bus, selected right plates, left plate of $C$) is isolated from the end of φ1 on. Its charge at the end of φ1 is $\sum b_iC_i(0-V_{ref,i})$; in φ2 the selected capacitors hold no charge and $C$ holds $C(0-v_{OUT})$:

$$
-\sum_i b_iC_iV_{ref,i}=-C\,v_{OUT}
\quad\Longrightarrow\quad
v_{OUT}=\sum_i b_i\frac{C_i}{C}V_{ref,i}.
$$

With $C_0=C_2=C/2$, $C_1=C_3=C/4$:

$$
v_{OUT}(\varphi_2)=V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}\right)+\frac{V_{REF}}{k}\left(\frac{b_2}{2}+\frac{b_3}{4}\right),
$$

which is the ideal 4-bit characteristic for $k=4$.

### Step 3 — Output for $k=2$ in LSBs

For $k=2$, $v_{OUT}=V_{REF}(b_0/2+b_1/4+b_2/4+b_3/8)$. With $1\,\mathrm{LSB}=V_{REF}/16$ and the code $4m+n$ ($m=2b_0+b_1$, $n=2b_2+b_3$, each 0–3):

$$
v_{OUT}=4m+2n\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB},\qquad \mathrm{INL}=n\ \mathrm{LSB}.
$$

| Codes | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$ (LSB) | 0, 2, 4, 6 | 4, 6, 8, 10 | 8, 10, 12, 14 | 12, 14, 16, 18 |

### Step 4 — INL, DNL and monotonicity

$$
\mathrm{INL}=0\ \text{to}\ {+3}\ \mathrm{LSB};\qquad
\text{steps: }2\ \mathrm{LSB}\ (\mathrm{DNL}=+1)\ \text{inside a group},\quad 4-6=-2\ \mathrm{LSB}\ (\mathrm{DNL}=-3)\ \text{at a group transition}.
$$

So the INL is $+3$ LSB and $0$ LSB, and the DNL is $+1$ LSB and $-3$ LSB. At $0011\to0100$, $0111\to1000$ and $1011\to1100$ the output decreases by 2 LSB, so the converter is **not monotonic**.
