对于 [图 1] 所示的全差分（fully differential）运放，所有晶体管都工作在有源区（active region），$|V_{ov}| = |V_{GS} - V_t| = 0.2$ V，$I_{D5} = 200\ \mu$A，因此 $I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 100\ \mu$A。NMOS 取 $V_{An} = 10$ V，PMOS 取 $|V_{Ap}| = 20$ V（$r_o = |V_A|/|I_D|$），并忽略体效应（body effect）。$M_5$ 的栅极（$V_{cmc}$）保持为恒定的直流偏置（放大器上没有共模反馈起作用）。

求输出端口两种模型的元件值：[图 2] 中的戴维南 T 形网络模型（Thévenin T-network model）和 [图 3] 中的诺顿 π 形网络模型（Norton π-network model）。定义为 $v_{id} = v_{i1} - v_{i2}$，$v_{ic} = (v_{i1} + v_{i2})/2$，$v_{od} = v_{o1} - v_{o2}$，$v_{oc} = (v_{o1} + v_{o2})/2$，$i_{od} = (i_{o1} - i_{o2})/2$，$i_{oc} = (i_{o1} + i_{o2})/2$，其中 $i_{o1}$ 和 $i_{o2}$ 流入输出端。这两种模型满足
$v_{o1} = a_{dm}v_{id}/2 + a_{cm}v_{ic} + (R_{od}/2)i_{od} + R_{oc}i_{oc}$，$v_{o2} = -a_{dm}v_{id}/2 + a_{cm}v_{ic} - (R_{od}/2)i_{od} + R_{oc}i_{oc}$，
以及 $i_{o1} = G_{md}v_{id} + G_{mc}v_{ic} + v_{od}/R_{od} + v_{oc}/R_{oc}$，$i_{o2} = -G_{md}v_{id} + G_{mc}v_{ic} - v_{od}/R_{od} + v_{oc}/R_{oc}$。
求 $a_{dm}$、$a_{cm}$、$R_{od}$、$R_{oc}$、$G_{md}$、$G_{mc}$ 以及每个网络中的元件值。
