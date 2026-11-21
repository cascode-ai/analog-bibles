# 详细步骤 - G320

用共栅管的实际小信号特性代替理想电流缓冲器：其源极呈现电阻 $1/g_{m11}$。于是经 $C$ 反馈的电流通过一个 $RC$ 网络依赖于 $v_o$，而不再恰好等于 $sCv_o$。求出该电流，列出两个节点方程并消去 $v_1$。使反馈电流成为低通的那个因子会以零点的形式出现在分子中。

### 第 1 步 — 共栅级中的电流

$M_{11}$ 的栅极接固定偏置，即交流地。在 $r_{o11}=\infty$、$\gamma=0$ 时，流入源极的小信号电流 $i_c$ 使源极电压改变
$$
v_s=\frac{i_c}{g_{m11}},
$$
且 $i_c$ 全部从漏极流入节点 ①。设 $i_c$ 从输出端经 $C$ 流入源极，则
$$
i_c=sC\,(v_o-v_s)=sC\left(v_o-\frac{i_c}{g_{m11}}\right)
\quad\Rightarrow\quad
i_c=\frac{sC\,v_o}{1+sC/g_{m11}} .
$$
$g_{m11}\to\infty$ 时化为理想缓冲器的 $i_c=sCv_o$。$g_{m11}$ 有限时，$C$ 与 $1/g_{m11}$ 串联，使 $i_c$ 以时间常数 $C/g_{m11}$ 滚降。

### 第 2 步 — 节点方程

沿用给定模型的约定：$i_s$ 流出节点 ①，$M_6$ 从输出节点抽取 $g_mv_1$。由 KCL：
$$
\begin{aligned}
\text{node 1:}&\quad -i_s=\left(\frac1{R_1}+sC_1\right)v_1-i_c,\\
\text{output:}&\quad 0=g_mv_1+\left(\frac1{R_2}+sC_2\right)v_o+i_c .
\end{aligned}
$$
记 $D_c=1+sC/g_{m11}$，则 $i_c=sCv_o/D_c$。

### 第 3 步 — 消去 $v_1$

由输出方程，
$$
v_1=-\frac{v_o}{g_m}\left(\frac{1+sR_2C_2}{R_2}+\frac{sC}{D_c}\right).
$$
代入节点 1 方程，并利用 $(1/R_1+sC_1)=(1+sR_1C_1)/R_1$：
$$
-i_s=-\frac{v_o}{g_mR_1R_2}\left[(1+sR_1C_1)\left(1+sR_2C_2+\frac{sR_2C}{D_c}\right)+\frac{g_mR_1R_2\,sC}{D_c}\right].
$$
方括号乘以 $D_c$ 后取倒数：
$$
\frac{v_o}{i_s}=\frac{g_mR_1R_2\left(1+sC/g_{m11}\right)}{(1+sR_1C_1)\left[(1+sR_2C_2)(1+sC/g_{m11})+sR_2C\right]+g_mR_1R_2\,sC} .
$$
符号运算校核确认了这一结果。

### 第 4 步 — 零点与极限

分子在下式处为零：
$$
1+\frac{sC}{g_{m11}}=0\quad\Rightarrow\quad s=-\frac{g_{m11}}{C},
$$
这是一个左半平面零点。它来自反馈通路。由于 $v_o=i_cD_c/(sC)$，在 $s=-g_{m11}/C$ 处电路可以在 $v_o=0$ 时流过有限的 $i_c$，这正是 $v_o/i_s$ 零点的含义。分母现在是三阶的，因此有限的输入阻抗还会增加第三个极点。当 $g_{m11}\to\infty$ 时 $C/g_{m11}\to0$，表达式化为给定的二阶结果
$$
\frac{v_o}{i_s}=\frac{g_mR_1R_2}{1+s\left[R_1C_1+R_2(C+C_2)+g_mR_1R_2C\right]+s^2R_1R_2C_1(C_2+C)},
$$
没有零点。
