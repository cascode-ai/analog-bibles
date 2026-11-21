# 详细步骤 - G058

在集电极加测试电压 $v_x$，输入端保持理想电流源（置零后为开路），对加入发射极—集电极之间 $r_o$ 的 T 模型列两个节点方程求解。

### 第 1 步 — 输出电阻的测试电路

理想电流源的内阻为无穷大，其值置零后成为开路。此时发射极节点只接两个元件：接到接地基极的 $r_e=\alpha_0/g_m$，以及接到集电极的 $r_o$。集电极处除 $r_o$ 外还有受控源 $g_mv_e$，按 [图 2] 中的方向，它把电流从地注入集电极节点。$R_C$ 视为开路。

在集电极加 $v_x$，令 $i_x$ 为测试源流入集电极的电流。

### 第 2 步 — 节点方程

发射极节点的 KCL（经 $r_o$ 流入的电流全部经 $r_e$ 流出）：

$$
\frac{v_x-v_e}{r_o}=\frac{v_e}{r_e}\quad\Rightarrow\quad v_e=v_x\,\frac{r_e}{r_o+r_e}.
$$

集电极节点的 KCL（测试电流与受控源电流都经 $r_o$ 流出）：

$$
i_x+g_mv_e=\frac{v_x-v_e}{r_o}
\quad\Rightarrow\quad
i_x=\frac{v_x-v_e}{r_o}-g_mv_e=v_e\left(\frac1{r_e}-g_m\right).
$$

第二种形式利用发射极方程，把 $(v_x-v_e)/r_o$ 换成 $v_e/r_e$。

### 第 3 步 — 用 T 模型关系化简

由于 $r_e=\alpha_0/g_m$，且 $1/\alpha_0=(\beta_0+1)/\beta_0$，

$$
\frac1{r_e}=\frac{g_m(\beta_0+1)}{\beta_0}=g_m+\frac{g_m}{\beta_0}=g_m+\frac1{r_\pi},
\qquad\text{so}\qquad i_x=\frac{v_e}{r_\pi}.
$$

集电极电流的变化只是发射极电流中的基极电流部分：发射极电流 $v_e/r_e$ 流过 $r_e$，其中 $\alpha_0$ 的比例由受控源送回。

### 第 4 步 — 输出电阻

联立第 2、3 步，并利用 $r_\pi/r_e=(\beta_0/g_m)/(\alpha_0/g_m)=\beta_0/\alpha_0=\beta_0+1$，

$$
R_o=\frac{v_x}{i_x}=\frac{r_\pi(r_o+r_e)}{r_e}=(\beta_0+1)(r_o+r_e)=(\beta_0+1)r_o+r_\pi\approx\beta_0r_o .
$$

发射极由理想电流源供电，其总电流不能变化；集电极电压的变化只能把电流重新分配到基极，因此输出电阻由 $r_o$ 提高到约 $\beta_0r_o$，这是发射极负反馈（emitter degeneration）所能达到的最大值。例如 $I_C=250\ \mu$A、$\beta_0=200$、$V_A=130$ V 时，$r_o=V_A/I_C=520\ \mathrm{k\Omega}$，$R_o\approx201\times520\ \mathrm{k\Omega}\approx105\ \mathrm{M\Omega}$。
