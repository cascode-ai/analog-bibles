# Detailed solution - G146

The diode, with its anode at the op-amp output and cathode at the $V_{out}$ node, lets the op amp push current into the $V_{out}$ node but never pull current out of it. So consider the two signs of $V_{in}$ separately: in one the diode conducts and closes the feedback loop; in the other it blocks, the loop opens, and the resistors alone determine $V_{out}$.

### Step 1 — $V_{in}<0$: diode on, inverting amplifier

If the loop is closed, the ideal op amp holds $V_-=V_+=0$ (virtual ground). The input resistor then carries $V_{in}/1\ \mathrm{k\Omega}$ toward the source, i.e. a current $|V_{in}|/1\ \mathrm{k\Omega}$ must flow from the $V_{out}$ node through the feedback resistor into the virtual-ground node. Since $V_{out}$ is unloaded, this current must enter the $V_{out}$ node through the diode, from the op-amp output: the forward direction. The diode therefore conducts, the assumption is consistent, and

$$
V_{out}=-\frac{1\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}}V_{in}=-V_{in}>0 .
$$

The diode drop lies inside the feedback loop; the op-amp output simply sits one diode drop above $V_{out}$, and the drop does not appear in $V_{out}$.

### Step 2 — $V_{in}>0$: diode off, resistive path

Now the inverting configuration would need current to flow from the virtual-ground node toward $V_{out}$ and back through the diode into the op amp, which the diode cannot do. With the diode blocking and the output terminal unloaded, no current can flow through the two resistors (the op-amp input draws none). With zero current there is no drop across either resistor:

$$
V_-=V_{in},\qquad V_{out}=V_-=V_{in}.
$$

The op amp sees $V_+-V_-=-V_{in}<0$ with no feedback, so its output saturates at the negative rail, which keeps the diode reverse-biased. The assumption is consistent.

### Step 3 — Transfer characteristic

Both branches give $V_{out}=0$ at $V_{in}=0$, so

$$
V_{out}=|V_{in}|=\begin{cases}-V_{in},&V_{in}<0,\\ +V_{in},&V_{in}>0.\end{cases}
$$

The circuit is a precision full-wave rectifier (absolute-value circuit): a "V"-shaped characteristic with slopes $-1$ and $+1$, free of the diode's forward drop.
