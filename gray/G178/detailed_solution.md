# Detailed solution - G178

Follow the common-mode input $V_{IC}$ up through the level-shifting followers to the pair's emitters, then require every transistor in the signal path and in the bias sources to stay out of saturation, $|V_{CE}|\ge|V_{CE(sat)}|=0.1$ V. The two halves are symmetric, so the left half represents both.

### Step 1 — Node voltages for a common-mode input

Each pnp follower $Q_6$ ($Q_7$) conducts, so its emitter, which is the base of $Q_1$ ($Q_2$), sits one $|V_{BE(on)}|$ above its base:

$$
V_{B1}=V_{IC}+0.7\ \mathrm V,\qquad V_{E1}=V_{B1}+0.7\ \mathrm V=V_{IC}+1.4\ \mathrm V .
$$

With equal currents in $Q_1$ and $Q_2$, the diode-connected $Q_3$ fixes the collector of $Q_1$ at $V_{BE3}=0.7$ V, and the mirror holds the collector of $Q_2$ at the same voltage. The collectors of $Q_6$, $Q_7$ are at $-V_{EE}=0$.

### Step 2 — Lower limit

$Q_1$ stays active while $V_{EC1}\ge0.1$ V:

$$
(V_{IC}+1.4\ \mathrm V)-0.7\ \mathrm V\ge0.1\ \mathrm V\;\Rightarrow\;V_{IC}\ge-0.6\ \mathrm V .
$$

$Q_6$ stays active while $V_{EC6}=(V_{IC}+0.7\ \mathrm V)-0\ge0.1$ V, which gives the same $V_{IC}\ge-0.6$ V. $Q_3$, $Q_4$ are always active ($V_{CE}=0.7$ V).

### Step 3 — Upper limit

The tail source $Q_5$ has its emitter at $V_{CC}$ and its collector at $V_{E1}$:

$$
V_{CC}-(V_{IC}+1.4\ \mathrm V)\ge0.1\ \mathrm V\;\Rightarrow\;V_{IC}\le V_{CC}-1.5\ \mathrm V .
$$

The follower bias sources $Q_8$, $Q_9$ have their collectors at $V_{B1}$ and need $V_{CC}-(V_{IC}+0.7\ \mathrm V)\ge0.1$ V, i.e. $V_{IC}\le V_{CC}-0.8$ V, which is less restrictive.

### Step 4 — Common-mode input range

$$
-0.6\ \mathrm V\le V_{IC}\le V_{CC}-1.5\ \mathrm V,
$$

which extends 0.6 V below the negative rail $-V_{EE}=0$. Without the followers, the pair's emitters would be only $0.7$ V above $V_{IC}$ while its collectors are at 0.7 V, so $V_{EC1}\ge0.1$ V would require $V_{IC}\ge0.1$ V. The $V_{EB}$ level shift of $Q_6$, $Q_7$ supplies the missing headroom while keeping the high-gain active mirror load.
